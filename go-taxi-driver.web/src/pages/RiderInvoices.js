import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

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
    <TableContainer component={Paper}>
      <Table aria-label="fakturor tabell">
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell>Pickup Adress</TableCell>
            <TableCell>Summa</TableCell>
            <TableCell>Betalningsmetod</TableCell>
            <TableCell>Ladda ner PDF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.pickupAddress}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleDownload(invoice.id)}>
                  Ladda ner PDF
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RiderInvoices;
