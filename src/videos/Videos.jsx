
import React from 'react'
import { Grid } from '@material-ui/core'

import Video from './Video/Video'
import useStyles from './styles'
import styled from "styled-components";

import horn from '../pictures/horn.jpg'

const videos = [
    { id: 1, name: 'Salted Beef Omasum', description: 'ijebo Garri', image: '../pictures/horn.jpg' },
    { id: 2, name: 'Cow Horn', description: 'ijebo Garri', image: "" },
    { id: 3, name: 'BitterKola', description: 'ijebo Garri', image: "" },
    { id: 4, name: 'Beef Tongue', description: 'ijebo Garri', image: "" },


]

const Products = ({ products }) => {
    const classes = useStyles()

    return (
        <Wrapper>


            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify='center' spacing={4}>
                    {videos.map((video) => (
                        <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>

                            <Video video={video} />
                        </Grid>
                    )

                    )}
                </Grid>
            </main>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%),
                url(about.jpg) no-repeat fixed;
    padding: 5%;
    height: 100%;
    overflow: auto`

export default Products