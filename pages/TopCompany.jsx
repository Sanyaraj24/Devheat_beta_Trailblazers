import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from './TopCompany.module.css'

export default function MultiActionAreaCard() {
  return (
    <>
    <div className={styles.container}>
 <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }} style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="german-american.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          German American Bancorp
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}} >
          German American Bancorp, Inc. has earned the 19th ranking our of 196 community banks in the nation on the S&P Global Market Intelligence annual ranking of 2022’s best-forming community banks with assets between $3 billion and $10 billion.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card></div>
    
   
    <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="nvidia.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:"white",backgroundColor:"black"}}>
          NVIDIA Corp
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{backgroundColor:"black",color:"white"}}>
          For Nvidia, CNBC reports that consensus EPS estimates imply 11.4% growth over the next year, followed by 41.0% growth over the next three to five years. For the tech sector, the figures are 15.6% and 45.7%, respectively. 
          <br>
          </br>
        <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card></div>
    <div className={styles.box} >
    
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="apple.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Apple Inc
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}}>
          Apple is the world's largest technology company by revenue, with US$394.3 billion in 2022 revenue. As of March 2023<br>
          </br>
          <br></br>Apple is the world's biggest company by market capitalization.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card></div>
   
    <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="microsoft.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Microsoft Corp
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}}>
          Microsoft Corp. easily topped profit and revenue expectations for its latest quarter, though its shares were moving more than 3% lower in extended trading Tuesday after the company discussed the year ahead.
        
          <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card></div>
    <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="nisource.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          NiSource Inc.
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}}>
          NiSource Inc. is reporting second quarter net income of of $39.9 million — a drop from the $53.2 million made in the same quarter last year. The earnings report was released on the same day the utility announced an increase in electric rates will begin this month.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card></div>
    <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="uscorp.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          USCorp.
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}}>
            <br></br>
          U.S. corporate bond spreads continue to tighten and are now essentially the same as 2017–2019 said Nicholas Colas, co-founder of DataTrek Research, in a note emailed Monday.<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card></div>
    <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="nesco.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nesco Limited
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}}>
          Nesco Limited is a diversified Company in four business segments viz., IT Parks, Exhibition Centre, Foods and Indabrator. While the Indian promoters hold 68% stake.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card></div>
    <div className={styles.box}>
    <Card sx={{ maxWidth: 345 }}style={{color:"white",backgroundColor:"black"}}>
      <CardActionArea style={{color:"white",backgroundColor:"black"}}>
        <CardMedia
          component="img"
          height="140"
          image="gnf.jpeg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Genfit
          </Typography>
          <Typography variant="body2" color="text.secondary"style={{color:"white"}}>
          As Genfit hopes for phase 3 trial successes and future filings for its liver disease drug, its long-term CEO.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       
      </CardActions>
    </Card></div>
    
    </div>
    
    </>
  );
}
