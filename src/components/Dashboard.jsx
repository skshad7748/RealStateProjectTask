import { Box } from '@mui/material';
import Customer from '../assets/Customer.png';
import DashboardImg from '../assets/Dashboard.png';
import Revenue from '../assets/Revenue.png';

const Dashboard = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    }}>
      {/* Images container */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        position: 'relative',
        height: '200px',
        marginBottom: '20px',
      }}>
        {/* Left image with zoom effect */}
        <Box sx={{
          position: 'absolute',
          left: 47,
          top: 0,
          width: '50%',
          height: '90%',
          zIndex: 3,
          overflow: 'hidden',
          borderRadius: '8px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            zIndex: 4,
          }
        }}>
          <img 
            src={Customer}
            alt="Left decoration"
            style={{
              width: '70%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          />
        </Box>
        
        {/* Center image with zoom effect */}
        <Box sx={{
          position: 'absolute',
          left: '27%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '70%',
          height: '200%',
          zIndex: 2,
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: 3,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-50%) scale(1.1)',
            zIndex: 4,
          }
        }}>
          <img 
            src={DashboardImg}
            alt="Main dashboard"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        
        {/* Right image with zoom effect */}
        <Box sx={{
          position: 'absolute',
          right: -65,
          top: 95,
          width: '40%',
          height: '110%',
          zIndex: 3,
          overflow: 'hidden',
          borderRadius: '8px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
            zIndex: 4,
          }
        }}>
          <img 
            src={Revenue}
            alt="Right decoration"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;