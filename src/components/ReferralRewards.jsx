import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import Overview from "../assets/Overview.png"; // <-- replace with your image
import Referral from "../assets/Referral.png"; // <-- replace with your image
import game from "../assets/game.png"; // <-- replace with your image
const ReferralRewards = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Referral And <span style={{ color: "#4e9eff" }}>Rewards</span>
        </Typography>

        {/* Subtext */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: 6,
            color: "#666",
          }}
        >
          Refer your friends and colleagues to our platform and earn exciting
          rewards! The more you refer, the more you win.
        </Typography>

        {/* Content */}
        <Grid container spacing={3}>
          {/* Left Side - Referral Overview */}
          <Grid item xs={12} md={6} size={4}>
            <Card sx={{ p: 3, borderRadius: "20px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Overview
                </Typography>

                <Box
                  component="img"
                  src={Overview} // <-- replace with your image
                  alt="Marketing Solution"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} size={4}>
            <Card sx={{ p: 3, borderRadius: "20px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Referral Point
                </Typography>

                <Box
                  component="img"
                  src={Referral} // <-- replace with your image
                  alt="Marketing Solution"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} size={4}>
            <Card sx={{ p: 3, borderRadius: "20px", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  The game prize{" "}
                </Typography>

                <Box
                  component="img"
                  src={game} // <-- replace with your image
                  alt="Marketing Solution"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReferralRewards;
