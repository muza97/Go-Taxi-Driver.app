import React from 'react';
import { Paper, Typography, Button, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

const GuidesFAQ = () => {
  // Du kan ha din FAQ-data och guider i en stat eller hämta från en API
  const faqs = [
    {
      question: 'Hur installerar jag appen?',
      answer: 'Följ vår steg-för-steg installationsguide för att installera appen på din enhet.',
    },
    // ... fler FAQ
  ];

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4">Guider & FAQ</Typography>
      
      <Typography variant="h6">Driver App Guides</Typography>
      <List>
        {/* Loopa igenom guider här */}
        <ListItem>
          <ListItemText primary="Driver App Step-by-Step tutorial" />
          <Button>Read More</Button>
        </ListItem>
        {/* ... fler guider */}
      </List>
      
      <Typography variant="h6">Driver FAQ</Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      
      <Typography variant="h6">Download the App</Typography>
      <Button startIcon={<AndroidIcon />} component="a" href="www.android.com">Android App</Button>
      <Button startIcon={<AppleIcon />} component="a" href="www.apple.com" color="default">iPhone App</Button>
    </Paper>
  );
};

export default GuidesFAQ;
