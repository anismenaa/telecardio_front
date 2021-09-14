import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    flexGrow: 1,

  },
  media: {
    marginRight:20,
    height: 140,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    //padding: theme.spacing(2),
  },
});



const creerExamenClinique =() =>  {

  let examenClinique = JSON.parse(localStorage.getItem('ExamenClinique'));
  console.log("examen clinique test",examenClinique)
 
   



  const config = {
    headers :{
      ContentType:'application/json',
      'Access-Controll-Allow-Origin':'*'
    }
  }
  axios.post('http://localhost:8082/ajouter-examen-medical' ,examenClinique,config)
 
    .then((response) => {
      console.log(response)
      

    })
    .catch((err)=> {
      console.log({error: err})
    })

    //localStorage.clear();


}
export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>

     
<Grid container spacing={10}>
        <Grid item xs={12} md={6}>
         
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/cards/ordonnance.jpg"
          title="Ordonnance"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ordonnance
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer ou modifier une ordonnance à un patient 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Créer 
        </Button>
        <Button size="small" color="primary">
          Modifier
        </Button>
      </CardActions>
    </Card>



        </Grid>

        
        <Grid item xs={12} md={6}>
          
          
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/cards/ordonnance.jpg"
          title="certificat Médical"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          certificat Médical
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer  une certificat Médical pour un patient 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Créer 
        </Button>
        <Button size="small" color="primary">
          Modifier
        </Button>
      </CardActions>
    </Card>


        </Grid>

        
      </Grid>

<br/><br/><br/>
          
<Grid container spacing={10}>

       
<Grid item xs={12} md={6}>
          
          
          <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/images/cards/ordonnance.jpg"
            title="orientation"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Orientation
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Orrinter le patient ver une clinique ou un labo .. 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Créer 
          </Button>
          <Button size="small" color="primary">
            Modifier
          </Button>
        </CardActions>
      </Card>
  
  
          </Grid>
  

        <Grid item xs={12} md={6}>
         
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
           image="/images/cards/ordonnance.jpg"     
          title="Evacuation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Evacuation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            créer une demande d'evacuation pour un patient 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Créer 
        </Button>
        <Button size="small" color="primary">
          Modifier
        </Button>
      </CardActions>
    </Card>



        </Grid>

       
        
      </Grid>

      <Button style={{marginLeft:'45%'}} variant="contained" color="primary" onClick={creerExamenClinique} 
        
        >Save dossier </Button>

    </div>

    




    
  
  );
}
