import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const FAQ = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}
        >
          Frequently Asked <span style={{ color: "#4e9eff" }}>Questions</span>
        </Typography>

        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              There are chatbots, support lines, and customer reviews?
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              We are giving the best law services to the mass people for their
              legal advice and nees. We are a bunch of lawyers and we are very
              determind and loyel.
            </Typography>
          </CardContent>
        </Card>

        {/* FAQs */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Are there effective support lines available for real estate?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#666" }}>
              Yes, we provide 24/7 support lines dedicated to addressing your
              real estate queries efficiently.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Before creating one, is a real estate license needed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#666" }}>
              Yes, a valid real estate license is required to engage in any
              legal real estate transactions.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              What kind of content would help me market the asset?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#666" }}>
              High-quality images, virtual tours, informative descriptions, and
              showcasing key features are crucial to market real estate
              effectively.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Why should you invest in a mortgage?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#666" }}>
              Investing in a mortgage can provide long-term benefits including
              equity building, tax advantages, and property appreciation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold" }}>
              Optimize your site for mobile access?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#666" }}>
              Absolutely! Mobile optimization ensures that users have a smooth
              and accessible experience across all devices.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQ;
