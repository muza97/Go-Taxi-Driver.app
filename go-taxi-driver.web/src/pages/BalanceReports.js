import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Button, Typography } from '@material-ui/core';
import '../style/Reports.css'

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
    <div className="container balance-reports">
      <div className="header text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Balansrapporter</h2>
      </div>
      <div className="reports-table">
        {/* Replace List and ListItem with div structure */}
        {reports.map((report, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">{`Period: ${report.period}`}</div>
            <div className="table-cell button-cell">
              <button
                className="download-button"
                onClick={() => handleDownload(report.id)}
              >
                Ladda ner PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default BalanceReports;
