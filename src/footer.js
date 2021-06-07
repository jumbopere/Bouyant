import React from 'react'
import { Container, Box, Grid} from '@material-ui/core'
import { Facebook, Twitter, Email, WhatsApp} from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
     <Box px= {{xs: 3, sm:10}} py={{xs:5, sm:10}}  bgcolor= 'text.secondary' color ='white'>
       <Container maxWidth ="lg">

         <Grid container spacing ={5}>
           <Grid item xs= {12} sm={4}>
             <Box component = {Link} to = '/about' color = '#f7f7f7' >About Us </Box> <br/>
             <Box  component ={Link} to ='/contact' color ='#f7f7f7'>Contact Us </Box><br/>
             <Box  component ={Link} to ='/products' color ='#f7f7f7'>Products </Box><br/>
             <Box  component ={Link} to ='/gallery' color ='#f7f7f7'>Gallery</Box> <br/>
           </Grid>
       
           <Grid item xs= {12} sm={4}>
             <Box  component = {Link} href ='https://www.facebook.com' color ='inherit'> <Facebook/>Facebook </Box> <br/>
             <Box  component = {Link} href ='https://www.facebook.com' color ='inherit'> <Twitter/>Facebook </Box> <br/>
             <Box  component = {Link} href ='mailto:weta5000@gmail' color ='inherit'> <Email/>Email </Box> <br/>
             <Box  component = {Link} href ='https://www.wa.me/+2348100895033' color ='inherit'> <WhatsApp/>Whatsapp </Box> <br/>
           
           </Grid>
   
         </Grid>
         <Box textAlign="center" pt= {{xs:5, sm:10}} pb={{xs:5, sm:0}}>
   Bouyant Ideal LTD &reg; {new Date().getFullYear()}
     </Box>
         </Container>
       </Box> 
    </footer>
  )
}

export default Footer
