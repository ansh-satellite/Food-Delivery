import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = () => {
  const url = "http://localhost:4000";
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Failed to fetch the list");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the orders");
      console.error("Error fetching orders:", error);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/update`, {
        orderId,
        status: event.target.value
      });

      if (response.data.success) {
        toast.success("Status updated successfully");
        await fetchAllOrders();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred while updating the status");
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order-add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, i) => (
                  <React.Fragment key={i}>
                    {item.name} X {item.quantity}
                    {i !== order.items.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </p>
              <p className="order-item-name">
                {order.address.firstName} {order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street},</p>
                <p>{order.address.city}, {order.address.state}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p className="order-item-amount">${order.amount}.00</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
