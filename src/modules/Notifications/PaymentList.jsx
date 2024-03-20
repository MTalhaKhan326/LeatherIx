import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentList() {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get("https://crm-lara-mongo-7azts5zmra-uc.a.run.app/api/partner-payment-list")
      .then(response => {
        setPayments(response.data.data);
        console.log("Data", response.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

 

  return (
    <div>
      {/* <h1>Payment List</h1> */}
      <table>
        <thead>
          <tr>
            <th className='px-3'>Payment ID</th>
            <th className='px-3'>Amount</th>
            <th className='px-3'>Currency</th>
            <th className='px-3'>Statement</th>
            <th className='px-3'>Status</th>
            <th className='px-3'>Card Last 4</th>
            <th className='px-3'>Card Address ZIP</th>
             <th className='px-3'>Time</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.payment_id}>
              <td className='px-3'>{payment.payment_id}</td>
              <td className='px-3'>{payment.amount}</td>
              <td className='px-3'>{payment.currency}</td>
              <td className='px-3'>{payment.statement}</td>
              <td className='px-3'>{payment.status}</td>
              <td className='px-3'>{payment.card_last4}</td>
              <td className='px-3'>{payment.card_address_zip}</td>
              <td className='px-3'>{payment.utc_created_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentList;
