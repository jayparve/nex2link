import React from 'react';

const orders = [
  {
    id: 1,
    type: 'Logo Design',
    status: 'Shipped',
    deliveryDate: '2024-08-20',
  },
  {
    id: 2,
    type: 'Website Design',
    status: 'Processing',
    deliveryDate: '2024-08-25',
  },
  {
    id: 3,
    type: 'Video Editing',
    status: 'Delivered',
    deliveryDate: '2024-08-15',
  },
];

const Orders = () => {

  return (

    <div className="container mx-auto px-4 mt-8 ">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Order Type: {order.type}</h3>
              <p className="text-gray-600 mb-2">Status: 
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium
                  ${order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'}`}>
                  {order.status}
                </span>
              </p>
              <p className="text-gray-600">Delivery Date: {order.deliveryDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;