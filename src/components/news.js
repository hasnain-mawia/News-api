import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function News() {
    


    const[news, setNews] = useState ([])


    const fetchnews = ()=>{
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3424ae605a664da7844832b1ff53bdf0')  
      .then((response)=>{
        console.log(response)
        setNews(response.data.articles)
      })
    }
  return (
    <>
    <Container>
    <Button sx={{mt:2}} variant="contained" onClick={fetchnews}>Update News</Button>
    
{
  news.map((value)=>{
    return(
      <Grid>
        <Grid item xs={4} lg={4} md={4}>
        <Card sx={{ maxWidth: 345 , mt:5}}>
      <CardMedia
        component="img"
        height="190"
        image={value.urlToImage}
    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {value.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {value.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>    )
  })
}
    </Container>
</>
  )
}

export default News
