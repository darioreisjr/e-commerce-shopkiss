import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Divider, Typography } from "@mui/material";

import Logo from '../Logo'


export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 12 }}>
      <Divider variant="fullWidth middle" />
      <Grid container spacing={2} marginBottom={2}>

        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Box>
              <Logo />
            </Box>
            <Box>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit excepturi nobis cupiditate odio rem tempore. Corporis illo modi debitis? Consequatur, quidem reprehenderit. Eius natus repellat quaerat, nam cum voluptatum?</Typography>
            </Box>
            <Box>
              <Typography>
                Accepted Payments
              </Typography>

              <Box>
                <Stack direction="row" spacing={2}>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/stripe-3629090-3030362.png" width={60} />
                  <img src="https://logospng.org/download/visa/logo-visa-256.png" width={60} />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/mastercard-3521564-2944982.png" width={60} />
                  <img src="https://logospng.org/download/amazon/logo-amazon-256.png" width={60} />

                </Stack>
                <Stack direction="row" spacing={2}>
                  <img src="https://logoeps.com/wp-content/uploads/2014/02/39073-klarna-logo-icon-vector-icon-vector-eps.png" width={60} />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/paypal-3628972-3030197.png" width={60} />
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968144.png" width={60} />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/google-pay-3628807-3030084.png" width={60} />

                </Stack>
              </Box>

            </Box>
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

      <Divider />
      <Grid container spacing={4} marginTop={3} marginBottom={3}>
        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Stack direction="row" spacing={2}>
              <Typography>Become Seller</Typography>
              <Typography>Gift Cards</Typography>
              <Typography>Help Center</Typography>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={4} direction="row">
          <Container maxWidth="sm" >
            <Stack direction="row" spacing={2}>
              <Typography> Terms of Use</Typography>
              <Typography> Privacy Policy</Typography>
            </Stack>
          </Container>

        </Grid>
        <Grid item xs={4}>
          <Container maxWidth="sm">
            <Typography> All Right reserved by ShopKiss | 2022</Typography>
          </Container>
        </Grid>
      </Grid>
    </Box >
  )
}
