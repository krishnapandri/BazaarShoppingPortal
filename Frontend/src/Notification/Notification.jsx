import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to trigger notifications
export const showNotification = (message, type = "info") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000, // Auto-dismiss after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
export function showWarning(message){
  showNotification(message,'warning')

}
export function showSuccess(message){
  showNotification(message,'success')
}
export function showError(message){
  showNotification(message,'error')
}
export function showInfo(message){
  showNotification(message)
}
// Notification container to be added to App.js
const NotificationContainer = () => <ToastContainer />;

export default NotificationContainer;
