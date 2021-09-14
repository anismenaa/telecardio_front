import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



export default function PaymentForm() {
  let Information = JSON.parse(localStorage.getItem('information'));


  ///let InformationBiometrique = JSON.parse(localStorage.getItem('informationBio'));
  const [values, setValues] = React.useState({

    id :Information.informationBiometrique ? Information.informationBiometrique.id: "",
    taille:Information.informationBiometrique ? Information.informationBiometrique.taille: "" ,
    poids: Information.informationBiometrique ? Information.informationBiometrique : ""
    
  });

  useEffect(() => {
    
    Information.informationBiometrique!==null ? setValues(Information.informationBiometrique) : Information.informationBiometrique =null  
    console.log("this is use effect",values)
    

  },   []  );


  const changeTaille = (event) => {
    //console.log(event.target.value)
    //values = event.target.value
    setValues({
      taille : event.target.value,
      poids: values.poids,
      id:values.id

    })
    //const {informationBiometrique}=Information;
    let informationBiometrique = values;
    console.log('destract', {...Information, informationBiometrique  });
    console.log("this is test",informationBiometrique)
    localStorage.setItem('information', JSON.stringify({...Information, informationBiometrique}));
   


  }
   

  
  const changePoids = (event) => {
    //console.log(event.target.value)
    //values = event.target.value
    setValues({
      taille : values.taille,
      poids: event.target.value,
      id:values.id

    })
    
    let informationBiometrique = values
    console.log('destract', {...Information, informationBiometrique  })

    localStorage.setItem('information', JSON.stringify({...Information, informationBiometrique}));
  
  }



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      Informations Biometrique
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
         value={values.taille}
         onChange={changeTaille}

          

          required
           id="taille" 
           label="Taille"
            fullWidt
            h autoComplete="taille" />
        </Grid>

        
        <Grid item xs={12} md={6}>
          <TextField
            value={values.poids}
            onChange={changePoids}
            required
            id="poinds"
            label="Poids"
            fullWidth
            autoComplete="poids"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}