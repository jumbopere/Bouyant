import React from 'react'
import { Card, CardMedia, Typography,  CardContent} from '@material-ui/core'
import horn from '../../pictures/about.jpg'

import useStyles from '../styles'

const Video = ({ video }) => {
    const classes = useStyles()

    
    return (
        <Card className = {classes.root}>
<CardMedia className = {classes.media} image = {video.image} title = {video.name}/>
         <CardContent>
             <div className = {classes.cardContent}>
                 <Typography variant ="h5" gutterBottom>
                     {video.name}
                 </Typography>
                
             </div>
             <Typography variant ="body2" color = "textSecondary">  {video.description}</Typography>
                  
             </CardContent>   
         
        </Card>
    )
}

export default Video
