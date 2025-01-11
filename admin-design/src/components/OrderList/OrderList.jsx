import React, { useState } from "react";
import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import "./OrderList.css";
import shoes from "../../assets/images/shoes.png";
import headphones from "../../assets/images/headphones.jpg";

const OrderList = () => {
 
  const [orders, setOrders] = useState([
    {
      id: 1,
      photo: shoes,
      name: "Shoes",
      stock: "In Stock",
      price: "$499",
      createdAt: "06/12/2023",
      status: "in-stock",
    },
    {
      id: 2,
      photo: headphones,
      name: "Headphones",
      stock: "Out of stock",
      price: "$1050",
      createdAt: "23/07/2021",
      status: "out-of-stock",
    },
  ]);

 
  const deleteHandle = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  

  return (
    <div className="order-list">
      <div className="header">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search here..." />
        </div>

        <button className="add-new-btn">Add new +</button>
      </div>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="order-id">#{order.id}</td>
              <td>
                <img
                  src={order.photo}
                  alt={order.name}
                  className="order-photo"
                />
              </td>
              <td>{order.name}</td>
              <td
                className={
                  order.status === "in-stock"
                    ? "stock in-stock"
                    : "stock out-of-stock"
                }
              >
                {order.stock}
              </td>
              <td>{order.price}</td>
              <td>{order.createdAt}</td>
              <td>
                <FaTrash
                  onClick={() => deleteHandle(order.id)}
                  className="icon delete-icon"
                  title="Delete"
                />
                <FaEdit
                 
                  className="icon edit-icon"
                  title="Edit"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
