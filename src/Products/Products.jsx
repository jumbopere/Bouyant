import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

const pics = [
   {id:1, name: 'Salted Beef Omasum', description: 'Salted Beef Omasum', image: "/veggies/bf.jpg"},
   {id:2, name: 'Beef Pizzles', description: 'Beef Pizzles',  image: "/veggies/bt.jpg"},
   {id:3, name: 'Beef Tail', description: 'Beef Tail', image:"/veggies/bu.jpg"},
   {id:4, name: 'Beef Tongue', description: 'Beef Tongue', image:"/veggies/bp.jpg"},
   {id:5, name: 'Cow Horn', description: 'Cow Horn', image:"/veggies/horn.jpg"},
   {id:6, name: 'Cow Skin', description: 'Cow Skin', image: "/veggies/af.jpg"},
{id:7, name: 'Bitterkola', description: 'Bitterkola', image:"/veggies/Bitterkola.jpg"},
]

const Productsx = ( { products }) => {
    const classes = useStyles()
    return (

        <main className = {classes.content}>
            <div className = {classes.toolbar}/>
   <Grid container justify = 'center' spacing = {4}>
      { pics.map((product) => (
          <Grid item key = {product.id} xs ={12} sm = {6} md= {4} lg = {3}>
              <Product product = {product}  />
          </Grid>
      )
      
      )}
       </Grid> 
</main>
)
}
export default Productsx