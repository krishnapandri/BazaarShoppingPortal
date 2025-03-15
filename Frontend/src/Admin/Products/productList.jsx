import React, { useEffect, useState } from "react";
import MuiTable from '../MuiTable/MuiTable'
import { Avatar, Chip, Switch } from "@mui/material";
import { fetchData } from "../../Utils/AxiosUtils";
import { showError, showSuccess } from "../../Notification/Notification";

const sampleData = [
  { id: 1, name: "Blue Premium T-shirt", category: "Fashion", brand: "Raymond",brandimg:"src/assets/raymond.webp", price: "$21.00", published: true, img: "shirt.png" },
  { id: 2, name: "Boston Round Cream Pack", category: "Beauty", brand: "Levi's",brandimg:"src/assets/raymond.webp", price: "$24.00", published: false, img: "/cream.png" },
  { id: 3, name: "Casual Shirt for Man", category: "Fashion", brand: "Raymond",brandimg:"src/assets/raymond.webp", price: "$26.00", published: false, img: "/casual.png" },
  { id: 4, name: "Samsung Galaxy-M1", category: "Gadgets", brand: "Samsung",brandimg:"src/assets/raymond.webp", price: "$250.00", published: true, img: "/phone.png" },
];

const columns = [
  {
    id: "name",
    label: "Name",
    render: (value, row) => (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Avatar src={row.img} alt={value} sx={{ width: 35, height: 35,objectFit:'contain' }} />
        <div>
          <b>{value}</b>
          <div style={{ fontSize: "12px", color: "#777" }}>#{row.id}</div>
        </div>
      </div>
    ),
  },
  {
    id: "category",
    label: "Category",
    render: (value) => <Chip label={value} variant="outlined" />
  },
  {
    id: "brandimg",
    label: "Brand",
    render: (value) => <img src={`/${value}`} alt={value} style={{ height: 24 }} />,
  },
  {
    id: "price",
    label: "Price",
  },
  {
    id: "published",
    label: "Published",
    render: (value, row, onToggle) => <Switch checked={value} onChange={() => onToggle(row)} />,
  },
];

const ProductTable = () => {
  
  const [data, setData] = useState([]);
  const handleEdit = (row) => alert(`Edit ${row.name}`);
  const handleDelete = (row) => alert(`Delete ${row.name}`);
  const handleView = (row) => alert(`View ${row.name}`);
  const [page, setPage] = useState(1);
  const [totalRowCount, setTotalRowCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleToggle = (row) => {
    setData((prev) =>prev.map((item) => (item.product_id === row.product_id ? { ...item, published: !item.published } : item)));
  };


async function GetProductList (){
    const response = await fetchData('getAllProducts',{pageno:page,noofrecords:rowsPerPage});
    if(response.status === 200){
      if(page===1){
        setData(response.data.message.products);
        setTotalRowCount(response.data.message.totalRowCount);
      }
      else 
        setData([...data,...response.data.message]);
    showSuccess("data retrieved successfully");
    console.log(response.data.message);
  }
}
  useEffect(()=>{
   (async ()=>{
    try {
      await GetProductList();
    }catch (error) {
      showError(error.message);
    }
   })(); 
  },[page]);

  return (
    <MuiTable 
      columns={columns}
      data={data}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
      onToggle={handleToggle}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      totalRowCount={totalRowCount}
      setRowsPerPage={setRowsPerPage}
    />
  );
};

export default ProductTable;
