import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function DefaultAccordion() {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const technologies: string[] = [
    "Typescript", "Redux (State Management)", "ReactJs", "Material UI Kit", "React Hooks + Refs", "Heroku", "Axios for call api", "Formik"
  ];

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{marginTop:"24px"}}>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Uygulama yap??l??rken kullan??lan teknolojiler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {technologies.map((technology, i) => (
            <Typography key={i}> {technology} </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Bu uygulamay?? ne i??e yar??yor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dijital Kartvizit Uygulamas??, girilen bilgiler ile kullan??labilecek bir kartvizit ????kar??r. Bu kartviziti g??rmesini istedi??iniz herkesle a????k bir ??ekilde payla??abilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Bu uygulama neden yap??ld???</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bu uygulama Innovance ??irketi ile yap??lan i?? g??r????mesi i??in haz??rlanm????t??r.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
