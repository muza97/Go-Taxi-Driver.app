import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Button, Typography } from '@material-ui/core';

const TaxReports = () => {
  const [taxReports, setTaxReports] = useState([]);

  useEffect(() => {
    // Här skulle du hämta skatterapport och utbetalningsinformation från din backend
    fetchTaxReports();
  }, []);

  const fetchTaxReports = async () => {
    // Koda för att hämta skatterapporter och utbetalningar från backend
    // const response = await fetch('/api/skatterapporter');
    // const data = await response.json();
    // setTaxReports(data);
  };

  const handleDownload = (reportId, type) => {
    // Koda för att hantera nedladdning av en rapport eller lönespecifikation
    // Det kan innebära att skicka en begäran till backend och sedan trigga en nedladdning i användarens webbläsare.
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h5">Skatterapporter och Utbetalningar</Typography>
      <List>
        {taxReports.map((report) => (
          <ListItem key={report.id} divider>
            <ListItemText
              primary={`Period: ${report.period}`}
              secondary={`Skatt betald: ${report.taxPaid} | Lönespecifikation: ${report.paySlip}`}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDownload(report.id, 'taxReport')}
            >
              Ladda ner Skatterapport
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDownload(report.id, 'paySlip')}
              style={{ marginLeft: '10px' }}
            >
              Ladda ner Lönespecifikation
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaxReports;
