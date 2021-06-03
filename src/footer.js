import React from 'react'
import { Container, Box, Grid, Link} from '@material-ui/core'
//import { Facebook, Twitter, Instagram, Email} from '@material-ui/icons'

const Footer = () => {
  return (
    <footer>
     <Box px= {{xs: 3, sm:10}} py={{xs:5, sm:10}}  bgcolor= 'text.secondary' color ='white'>
       <Container maxWidth ="lg">

         <Grid container spacing ={5}>
           <Grid item xs= {12} sm={4}>
             <Box borderBottom ={1}> <Link href='/about' color ='inherit'>About Us</Link> </Box>
             <Box borderBottom ={1}> <Link href='/' color ='inherit'>Contact Us</Link> </Box>
             <Box borderBottom ={1}> <Link href='/' color ='inherit'>Help</Link> </Box>
             <Box borderBottom ={1}> <Link href='/' color ='inherit'>Address</Link> </Box>
           </Grid>
           <Grid item xs= {12} sm={4}>
             <Box borderBottom ={1}> <Link href='/video' color ='inherit'>videos</Link> </Box>
             <Box borderBottom ={1}> <Link href='/' color ='inherit'>Our Operation</Link> </Box>
             <Box borderBottom ={1}> <Link href='/' color ='inherit'>Delivery Policy</Link> </Box>
             <Box borderBottom ={1}> <Link href='/' color ='inherit'>Return Policy</Link> </Box>
           </Grid>
   
         </Grid>
         <Box textAlign="center" pt= {{xs:5, sm:10}} pb={{xs:5, sm:0}}>
   Jujo &reg; {new Date().getFullYear()}
     </Box>
         </Container>
       </Box> 
    </footer>
  )
}

export default Footer
