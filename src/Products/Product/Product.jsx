import React from 'react'
import { Card, CardMedia,  Typography,  CardContent} from '@material-ui/core'
import useStyles from './styles'

const Product = ({ product }) => {
    const classes = useStyles()

    
    return (
        <Card className = {classes.root}>
<CardMedia className = {classes.media} image = {product.image} title = {product.name}/>
         <CardContent>
             <div className = {classes.cardContent}>
                 <Typography variant ="h5" gutterBottom>
                     {product.name}
                 </Typography>
                
             </div>
             <Typography dangerouslySetInnerHTML = {{ __html: product.description}} variant ="body2" color = 'textSecondary'/>
                  
             </CardContent>   
        
        </Card>
    )
}

export default Product
