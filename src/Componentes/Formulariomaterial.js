import React,{Component} from 'react';
import {Grid,TextField,Button} from '@material-ui/core';
import axios from 'axios';

class RegistroUsuario extends Component{
  constructor(){
    super();
    this.state={
      nombre:"",
      apellidos:"",
      correo:"",
      password:"",
      userName:""
    }
  }

  enviarRegistro=(e)=>{
    e.preventDefault();
    console.log('Un nuevo integrante a la tribu.')
    console.log(this.state);

    const usuario={
      nombre:this.state.nombre,
      apellidos:this.state.apellidos,
      correo:this.state.correo,
      password:this.state.password,
      userName:this.state.userName
    };

    axios.post('http://localhost:8280/api/v1/usuario',usuario)
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })

    console.log("Se envio la informacion");
    this.limpiarDatos();
  }

  limpiarDatos=()=>{
    console.log("Metodo para limpiar formulario");
    this.setState({nombre:""});
    this.setState({ apellidos:""});
    this.setState({ correo:""});
    this.setState({ password:"" });
    this.setState({ userName:""});
    console.log("Datos limpios");
  }

  render(){
    return(
      <div>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Nombre"
              variant="outlined"
              required
              type="text"
              onChange={e=>this.setState({nombre:e.target.value})}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Apellidos"
              variant="outlined"
              required
              type="text"
              onChange={e=>this.setState({apellidos:e.target.value})}/>
            </Grid>

            <Grid item xs={12}>
              <TextField label="Correo"
              variant="outlined"
              required
              type="text"
              onChange={e=>this.setState({correo:e.target.value})}/>
            </Grid>

            <Grid item xs={12}>
              <TextField label="Username"
              variant="outlined"
              required
              type="text"
              onChange={e=>this.setState({userName:e.target.value})}/>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password"
              variant="outlined"
              required
              type="password"
              onChange={e=>this.setState({password:e.target.value})}/>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained"
                      onClick={this.enviarRegistro}
                      color='primary'>
                      Unirme a la tribu
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default RegistroUsuario;
