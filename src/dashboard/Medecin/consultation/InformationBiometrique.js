import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



export default function InformationBiometrique() {
  let Information = JSON.parse(localStorage.getItem('information'));

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
  
    setValues({
      taille : event.target.value,
      poids: values.poids,
      id:values.id

    })
  }

  
  const changePoids = (event) => {
 
    setValues({
      taille : values.taille,
      poids: event.target.value,
      id:values.id

    })
  
  }

  useEffect(() => {
    
    let informationBiometrique = values
    console.log('destract', {...Information, informationBiometrique  })

    localStorage.setItem('information', JSON.stringify({...Information, informationBiometrique}));
    

  },   [values]  );



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