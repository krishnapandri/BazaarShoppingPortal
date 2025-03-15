import fs from 'fs/promises';
import path from 'path';
import { ErrorLog } from '../entity/ErrorLog';
import { ExecuteQueryWithEntity } from './DbUtils';
import { sendEmailToAdmin } from './EmailUtils';
import { CriticalLevel } from '../data-source';
import dotenv from 'dotenv';

dotenv.config();
const errorLogfilePath = path.join(__dirname,'../Errorlog/ErrorLog.log');

export const WritetoErrorFile = async function(error:Error,fileName:string,methodName:string="",sqlQuery:string=""){
    let message = `\n
  Date :- ${new Date().toLocaleString()}
  Error :- ${JSON.stringify( typeof error === 'string' ? error : error?.message)}
  Code :- ${JSON.stringify( typeof error === 'string' ? "" : (error as any)?.code)}
  FileName :- ${fileName}
  MethodName :- ${methodName}
  ErrorDesc :- ${JSON.stringify(error)}
  `;
    if(sqlQuery)
      message +=`sqlQuery :- ${JSON.stringify(sqlQuery)};`
    await fs.appendFile(errorLogfilePath,message)
}
    
export async function WriteCustomFile(filePath:string,text:string){
    await fs.appendFile(filePath,"\n"+text);
}

export async function WriteErrorToDB(CustomerID:number=0,LineNo:number=0,Err:Error,FileName:string,MethodName:string,sqlquery:string="",requestUrl:string="",criticalLevel:CriticalLevel=CriticalLevel.HIGH){
  const errObj = new ErrorLog();
  errObj.errorDesc = Err?.message?.substring(0,2000);
  errObj.traceMessage = Err?.stack?.substring(0,2000);
  errObj.customerId = CustomerID;
  errObj.fileName = FileName;
  errObj.criticalLevel = criticalLevel;
  errObj.isActive = 1;
  errObj.lineNo = LineNo.toString();
  errObj.sqlquery = sqlquery//.replace(/ /g,'');
  errObj.methodName = MethodName;
  try {
    await ExecuteQueryWithEntity<ErrorLog>(ErrorLog,errObj);
    // else 
    //   sendEmailToAdmin(new SendEmailClass('',`Error Has Been Occurred :- \n ${errObj.errorDesc} ${errObj.traceMessage} at methodname ${MethodName}`,'<h1>Error Occurred In the Application</h1>'));
  } catch (error) {
    WritetoErrorFile(error,__filename,'WriteErrorToDB',sqlquery);
  }
  if(errObj.criticalLevel === CriticalLevel.HIGH){
    const textMsg=`
Dear Admin,
We hope this message finds you well. An exception has occurred on the server, and we kindly ask that you contact the development team for further investigation and resolution.
Details of the Exception:
  > Error Message: ${errObj.errorDesc}
  > Request URL: ${requestUrl}
  > Timestamp: ${new Date().toLocaleDateString()}`;
    await sendEmailToAdmin(new SendEmailClass('',textMsg,'','Critical Error Alert'));
}
}
 
export class SendEmailClass{
  constructor(public to:string="",public text="",public html="",public subject="Exception Occurred In Quick Cart Backend"){}
}