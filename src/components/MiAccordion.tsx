import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
const MiAccordion = () => {
  const [expand, setExpand] = useState<string | false>(false);
  const handleChange = (isExpanded:boolean, panel:string) => {
    setExpand(isExpanded ? panel : false)
  };
  return (
    <>
      <Typography variant="h4" my={3}>
        Accordion Component
      </Typography>
      <Accordion
        expanded={expand === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h5">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit
          libero nemo autem id officia voluptatum accusamus! Saepe, dolorem qui!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expand === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h5">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit
          libero nemo autem id officia voluptatum accusamus! Saepe, dolorem qui!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expand === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography variant="h5">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sit
          libero nemo autem id officia voluptatum accusamus! Saepe, dolorem qui!
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MiAccordion;
