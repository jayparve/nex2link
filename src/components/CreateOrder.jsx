import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import services from '../appwrite/Config'; // Adjust the import path based on your project structure
import UserDropdown from './userDropdown';
 

function OrderManager({ userId, teamId }) {

    // State to hold form inputs
    const [orderType, setOrderType] = useState('');
    const [status, setStatus] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [orders, setOrders] = useState([]);
    const [editingOrderId, setEditingOrderId] = useState(null);

    // Fetch user orders on component mount
   

    // Handle form submission for creating or updating orders
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (editingOrderId) {
                // Update existing order
                await services.updateOrder(editingOrderId, {
                    orderType,
                    Status: status,
                    deliveryDate,
                });
                alert('Order updated successfully!');
            } else {
                // Create new order
                const newOrder = {
                    orderType,
                    Status: status,
                    deliveryDate,
                    userId,
                    teamId,
                };

                await services.createOrder(newOrder);
                alert('Order created successfully!');
            }

            // Reset form
            setOrderType('');
            setStatus('');
            setDeliveryDate('');
            setEditingOrderId(null);

            // Refresh orders list
            const response = await services.listUserOrders(userId);
            setOrders(response.documents);

        } catch (error) {
            console.error('Failed to save order:', error);
            alert('Failed to save order. Please try again.');
        }
    };

    // Handle editing an order
    const handleEdit = (order) => {
        setOrderType(order.orderType);
        setStatus(order.Status);
        setDeliveryDate(order.deliveryDate);
        setEditingOrderId(order.$id);
    };

    // Handle deleting an order
    const handleDelete = async (orderId) => {
        try {
            await services.deleteOrder(orderId);
            alert('Order deleted successfully!');

            // Refresh orders list
            const response = await services.listUserOrders(userId);
            setOrders(response.documents);
        } catch (error) {
            console.error('Failed to delete order:', error);
            alert('Failed to delete order. Please try again.');
        }
    };

    return (
        <div>
            <h2>{editingOrderId ? 'Update Order' : 'Create Order'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select User:</label>
                    <UserDropdown onUserSelect={setSelectedUserId} />
                </div>
                <div>
                    <label>Order Type:</label>
                    <input
                        type="text"
                        value={orderType}
                        className='border-2 border-gray-300 rounded-md p-2'
                        onChange={(e) => setOrderType(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <input
                        type="text"
                        value={status}
                        className='border-2 border-gray-300 rounded-md p-2'
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Delivery Date:</label>
                    <input
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        required
                    />
                </div>
                <button className='bg-blue-500 text-white p-2 rounded-md' type="submit">{editingOrderId ? 'Update Order' : 'Create Order'}</button>
            </form>
            <h2>Order List</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.$id}>
                        <strong>{order.orderType}</strong> - {order.Status} - {order.deliveryDate}
                        <button onClick={() => handleEdit(order)}>Edit</button>
                        <button onClick={() => handleDelete(order.$id)}>Delete</button>
                    </li>
                ))}
            </ul>


        </div>
    );
}

export default OrderManager;
