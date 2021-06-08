import React from 'react'
import { Container, Box, Grid } from '@material-ui/core'
import { Facebook, Twitter, Email, WhatsApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor='text.secondary' color='white'>
        <Container maxWidth="lg">

          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box component={Link} to='/about' style={{ textDecoration: 'none', color: 'white' }}  >About Us </Box> <br />
              <Box component={Link} to='/contact' style={{ textDecoration: 'none', color: 'white' }} >Contact Us </Box><br />
              <Box component={Link} to='/products' style={{ textDecoration: 'none', color: 'white' }} >Products </Box><br />
              <Box component={Link} to='/gallery' style={{ textDecoration: 'none', color: 'white' }} >Gallery</Box> <br />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box component={Link} to={{ pathname: 'https://facebook.com' }} style={{ textDecoration: 'none', color: 'white' }} target='_blank' text-decoration='none'><Facebook />Facebook </Box> <br />
              <Box component={Link} to={{ pathname: 'https://twitter.com' }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}> <Twitter />Twitter </Box> <br />
              <Box component={Link} to={{ pathname: 'mailto:weta5000@gmail.com' }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}> <Email />Email </Box> <br />
              <Box component={Link} to={{ pathname: 'https://wa.me/+2348100895033' }} target='_blank' style={{ textDecoration: 'none', color: 'white' }}> <WhatsApp />Whatsapp </Box> <br />

            </Grid>

          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Bouyant Ideal LTD &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
