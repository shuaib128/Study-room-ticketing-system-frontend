import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionActions from '@mui/material/AccordionActions';
import Button from '@mui/material/Button';

export default function Tutor({ Subject, Description }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {Subject}
            </AccordionSummary>
            <AccordionDetails>{Description}</AccordionDetails>

            <AccordionActions>
                <Button>Add to queue</Button>
            </AccordionActions>
        </Accordion>
    );
}
