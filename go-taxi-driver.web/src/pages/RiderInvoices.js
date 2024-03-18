import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@material-ui/core';

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
    <Paper style={{ padding: 30, margin: 'auto', maxWidth: 900 }}>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Rider Invoices</h2>
      <TableContainer style={{ boxShadow: 'none' }}>
        <Table aria-label="invoices table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Pickup Address</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Download PDF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.length > 0 ? (
              invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.pickupAddress}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: '#01860f', color: '#fff', textTransform: 'none' }}
                      onClick={() => handleDownload(invoice.id)}
                    >
                      Download PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No invoices available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RiderInvoices;
