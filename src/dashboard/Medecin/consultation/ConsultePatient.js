import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
      width:"85%",
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    marginLeft: theme.spacing(35),
    marginRight: theme.spacing(5),
    marginTop:theme.spacing(8)

  },
 
  withoutLabel: {
    marginTop: theme.spacing(1),
  },
  
}));

export default function ConsultePatient() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    numeroSecuriteSocial: '',
    
  });

  // const handleChange = (event) => {
  //   event.preventDefault()
  //   setValues({values : event.target.value });
  //   // console.log(values.numeroSecuriteSocial)
  // };


  let numeroSecuriteSocial = '';
  
  const nssChange = (event) => {
    numeroSecuriteSocial = event.target.value;
    console.log(numeroSecuriteSocial)
  }

  const onClickResult = () => {

    console.log('this is the final nss:', numeroSecuriteSocial);
    const config = {
      Headers :{
        ContentType:'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpc3NhbWxvdXNyYSIsImlhdCI6MTYzMTE5NTUyOCwiZXhwIjoxNjMxMjgxOTI4fQ.878IRcc7yCb1yNwKQGsv92GSsKfX35inWfK9jpfHkdoR-ZzFj4PXwP820OEC1JWFHP8NbZ2oz6U9TKAMRcJlbQ ',
        'Access-Controll-Allow-Origin':'*'
      }
    }
    axios.get('http://localhost:8090/dossier-medical-service/afficher-dossier-medical/?numeroSecuriteSocial='+numeroSecuriteSocial ,config)
   
      .then((response) => {
        console.log(response)
        localStorage.setItem('information', JSON.stringify(response.data));


        //localStorage.setItem('informationPer', JSON.stringify(response.data.informationPersonnelle));
        // localStorage.setItem('informationBio', JSON.stringify(response.data.informationBiometrique));
        // localStorage.setItem('AntecedentPer', JSON.stringify(response.data.antecedentPersonnelle));
        // localStorage.setItem('AntecedentMed', JSON.stringify(response.data.antecedentMedicoCherigicaux));
        // localStorage.setItem('signeCar', JSON.stringify(response.data.signeCardiaque));


        

        

        const newInfo = localStorage.getItem('informationPer');
        console.log({
          myInfo: newInfo
        })
      })
      .catch((err)=> {
        console.log({error: err})
      })
  }
 
  return (
    <div className={classes.root}>
     
      <div>
      
     
    
        <FormControl fullWidth className={classes.margin} variant="filled">
          <InputLabel htmlFor="numeroSecuriteSocial">numéro de Securité Social</InputLabel>
          <FilledInput 
              multiline = 'true' 
              rows = '2'
              
            id="numeroSecuriteSocial"
            // value={nss}
            placeholder="ex: 2921557446982"
            name ='nss'

            onChange={nssChange}
            
          />
        </FormControl>
        <br/><br/><br/><br/>
        <div align-ce >

        <Button style={{marginLeft:'90%'}} variant="contained" color="primary" 
          onClick={onClickResult} >
          Consulte
        </Button>
        </div>
       
       </div>

       </div>
  )
}
