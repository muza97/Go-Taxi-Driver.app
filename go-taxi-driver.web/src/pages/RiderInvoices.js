import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@material-ui/core';
import '../style/RiderInvoices.css'

const RiderInvoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Ersätt detta med anrop till din backend för att hämta faktiska data
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    // Här skulle du hämta fakturainformation från din backend
    // const response = await fetch('din_backend_endpoint/kvitton');
    // const data = await response.json();
    // setInvoices(data);
  };

  const handleDownload = (invoiceId) => {
    // Här skulle du hantera nedladdningen av en faktura
    // Det kan innebära att skicka en begäran till backend för att få en PDF-fil
    // och sedan trigga en nedladdning i användarens webbläsare.
  };

  return (
    <div className="container rider-invoices">
      <div className="header text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Rider Invoices</h2>
        <p className="mb-6 text-gray-600">A summary of your rider invoices.</p>
      </div>
      <div className="invoices-table">
        <div className="table-row header">
          <div className="table-cell">Date</div>
          <div className="table-cell">Pickup Address</div>
          <div className="table-cell">Amount</div>
          <div className="table-cell">Payment Method</div>
          <div className="table-cell">Download PDF</div>
        </div>
        {invoices.length > 0 ? invoices.map((invoice, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{invoice.date}</div>
            <div className="table-cell">{invoice.pickupAddress}</div>
            <div className="table-cell">{invoice.amount}</div>
            <div className="table-cell">{invoice.paymentMethod}</div>
            <div className="table-cell">
              <button
                onClick={() => handleDownload(invoice.id)}
                className="download-button"
              >
                Download PDF
              </button>
            </div>
          </div>
        )) : (
          <div className="table-row no-invoices">
          <div className="table-cell">
          <div className="no-invoices-message">No invoices available</div>
        </div>
      </div>
        )}
      </div>
    </div>
  );
};

export default RiderInvoices;

