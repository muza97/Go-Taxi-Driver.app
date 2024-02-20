import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Button, Typography } from '@material-ui/core';

const BalanceReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Här skulle du hämta rapportinformation från din backend
    fetchBalanceReports();
  }, []);

  const fetchBalanceReports = async () => {
    // Koda för att hämta balansrapporter från backend
    // const response = await fetch('/api/balansrapporter');
    // const data = await response.json();
    // setReports(data);
  };

  const handleDownload = (reportId) => {
    // Koda för att hantera nedladdning av en rapport
    // Det kan innebära att skicka en begäran till backend och sedan trigga en nedladdning i användarens webbläsare.
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h5">Balansrapporter</Typography>
      <List>
        {reports.map((report) => (
          <ListItem key={report.id} divider>
            <ListItemText primary={`Period: ${report.period}`} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDownload(report.id)}
            >
              Ladda ner PDF
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default BalanceReports;
