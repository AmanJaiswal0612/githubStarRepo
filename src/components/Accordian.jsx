import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComplexGrid from './UserContent';
import Addition from './FirstGraph';
import SecondGraph from './SecondGraph';

export default function SimpleAccordion(el) {
    const[graphFetch,setgraphFetch]= React.useState(false)
  return (
    <div>
      <Accordion>
        <AccordionSummary
          onClick={()=>setgraphFetch(true)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ComplexGrid {...el} />
        </AccordionSummary>
        <AccordionDetails >
             <Addition repo={el.el.full_name} flag={graphFetch} />
             <SecondGraph repo={el.el.full_name} flag={graphFetch}   />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
