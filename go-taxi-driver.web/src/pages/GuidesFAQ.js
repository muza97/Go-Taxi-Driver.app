import React, {useEffect} from 'react';
import { Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';
import axios from 'axios';

import '../style/GuidesFAQ.css'

const GuidesFAQ = () => {
  useEffect(() => {
    axios.get('http://192.168.0.157:3000/api/protected-user')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // Du kan ha din FAQ-data och guider i en stat eller hämta från en API
  const faqs = [
    {
      question: 'Hur installerar jag appen?',
      answer: 'Följ vår steg-för-steg installationsguide för att installera appen på din enhet.',
    },
    // ... fler FAQ
  ];

  return (
    <div className="container guides-faq">
      <div className="header text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Guider & FAQ</h2>
      </div>

      <div className="content">
        <h3 className="subheading">Driver App Guides</h3>
        {/* Replace List with div structure */}
        <div className="guides">
          <div className="guide">
            <span>Driver App Step-by-Step tutorial</span>
            <button className="read-more-button">Read More</button>
          </div>
          {/* Add more guides as needed */}
        </div>

        <h3 className="subheading">Driver FAQ</h3>
        {/* Keep the Accordion for FAQs */}
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <ExpandMoreIcon />
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}

        <h3 className="subheading">Download the App</h3>
        <div className="download-buttons">
          <button className="android-app-button">
            <AndroidIcon />
            Android App
          </button>
          <button className="iphone-app-button">
            <AppleIcon />
            iPhone App
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuidesFAQ;
