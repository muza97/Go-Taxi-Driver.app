import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, Button, Typography } from '@material-ui/core';
import '../style/Reports.css'

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
    <div className="container tax-reports">
      <div className="header text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Skatterapporter och Utbetalningar</h2>
      </div>
      <div className="reports-table">
        {/* Loop through the taxReports and display them */}
        {taxReports.map((report, index) => (
          <div className="table-row" key={index}>
            <div className="table-cell">
              {`Period: ${report.period}`}
            </div>
            <div className="table-cell">
              {`Skatt betald: ${report.taxPaid}`}
            </div>
            <div className="table-cell">
              {`Lönespecifikation: ${report.paySlip}`}
            </div>
            <div className="table-cell button-cell">
              <button
                className="download-button"
                onClick={() => handleDownload(report.id, 'taxReport')}
              >
                Ladda ner Skatterapport
              </button>
              <button
                className="download-button"
                onClick={() => handleDownload(report.id, 'paySlip')}
              >
                Ladda ner Lönespecifikation
              </button>
            </div>
          </div>
        ))}
        {taxReports.length === 0 && (
          <div className="table-row text-center">
            <div className="table-cell" colSpan="4">
              Inga rapporter tillgängliga
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxReports;
