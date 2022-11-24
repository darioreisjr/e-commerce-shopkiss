import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";


export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} marginBottom={2}>

        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
          </Container>
        </Grid>

        <Grid item xs={2}>
          <Container maxWidth="sm">
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
                <Typography>Department</Typography>
                <Typography>Fashion</Typography>
                <Typography>Education Product</Typography>
                <Typography>Frozen Food</Typography>
                <Typography>Beverages</Typography>
                <Typography>Organic Grocery</Typography>
                <Typography>Office Supplies</Typography>
                <Typography>Beauty Products</Typography>
                <Typography>Books</Typography>
                <Typography>Eletronics & Gadget</Typography>
                <Typography>Travel Acessories</Typography>
                <Typography>Fitness</Typography>
              </Stack>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={2}>
          <Container maxWidth="sm">
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
                <Typography>Abouts Us</Typography>
                <Typography>About shopcart</Typography>
                <Typography>Careers</Typography>
                <Typography>News & Blog</Typography>
                <Typography> Help</Typography>
                <Typography>Press Center</Typography>
                <Typography>Shop by location</Typography>
                <Typography>Shopcart brands</Typography>
                <Typography>Affilate & Partners</Typography>
                <Typography>Ideas & Guides</Typography>
              </Stack>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={2}>
          <Container maxWidth="sm">
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
                <Typography>Services</Typography>
                <Typography>Gift Card</Typography>
                <Typography>Mobile App</Typography>
                <Typography>Shipping & Delivery</Typography>
                <Typography>Order Pickup</Typography>
                <Typography>Account Signup</Typography>
                <Typography>Security & Fraud</Typography>
              </Stack>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={2}>
          <Container maxWidth="sm">
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
                <Typography>Help</Typography>
                <Typography>ShopCart</Typography>
                <Typography>Returns</Typography>
                <Typography>Track Orders</Typography>
                <Typography>Contact us</Typography>
                <Typography>Feedback</Typography>
                <Typography>Security & Fraud</Typography>
              </Stack>
            </Box>
          </Container>
        </Grid>

      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> 
          </Container>
        </Grid>
      </Grid>
    </Box >
  )
}
