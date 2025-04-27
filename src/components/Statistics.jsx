import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Andoried from "../assets/andoried.png";
import Apple from "../assets/apple.png";
const Statistics = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f9ff", py: 8 }}>
      <Container>
        {/* Top Small Info */}
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            color: "#4e9eff",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Real Estate Stats
        </Typography>

        {/* Cards */}
        <Grid container spacing={4} justifyContent="center">
          {/* For Developers */}
          <Grid item xs={12} md={5}>
            <Card elevation={3} sx={{ borderRadius: 4, p: 3 }}>
              <CardContent>
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            01
          </Avatar>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  For Developer
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#6c757d",
                    textAlign: "left",
                    maxWidth: "700px",
                    margin: "0 auto",
                    mb: 5,
                  }}
                >
                  Get access to thousands of agents who are ready to sell your
                  project
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
                >
                  12350+
                </Typography>
                <Typography variant="body2" sx={{ color: "#6c757d" }}>
                  Properties developed globally with our platform.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* For Agents */}
          <Grid item xs={12} md={5}>
            <Card elevation={3} sx={{ borderRadius: 4, p: 3 }}>
              <CardContent>
              
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            02
          </Avatar>
        
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  For Agents
                </Typography>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#6c757d",
                    textAlign: "left",
                    maxWidth: "700px",
                    margin: "0 auto",
                    mb: 5,
                  }}
                >
                  Get access to thousands of agents who are ready to sell your
                  project
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#000", mb: 1 }}
                >
                  7530+
                </Typography>
                <Typography variant="body2" sx={{ color: "#6c757d" }}>
                  Active agents achieving success via our services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* App download buttons */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              borderRadius: "20px",
              px: 3,
              py: 1,
              mx: 1,
              textTransform: "none",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
           <Stack direction="row" spacing={1}><Avatar alt="Remy Sharp" src={Apple} /> </Stack> App Store
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              borderRadius: "20px",
              px: 3,
              py: 1,
              mx: 1,
              textTransform: "none",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
             <Stack direction="row" spacing={2}><Avatar alt="Remy Sharp" src={Andoried} /> </Stack>
           Google Play
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Statistics;
