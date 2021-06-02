import React,{Component} from 'react';
import axios from 'axios';
import {DataGrid} from '@material-ui/data-grid';

export default class Usuarios extends Component{

  state={
    usuarios:[]
  }


  componentDidMount(){
    console.log('Entra a componentdidmount');
    axios.get('http://localhost:8280/api/v1/usuario')
    .then(res=>{
      const usuario=res.data;
      this.setState({usuarios:usuario});

    })
  }

  render(){
    const columns=[

        {field:'id',headerName:'Id',width:200},
        {field:'nombre',headerName:'Nombre',width:200},
        {field:'apellidos',headerName:'Apellidos',width:200},
        {field:'correo',headerName:'Correo',width:200},
        {field:'userName',headerName:'Usuario',width:200}
    ]

  
    return(
      <div style={{height:400,width:'100%'}}>
        <DataGrid  id={Math.random()} rows={this.state.usuarios} columns={columns} pageSize={5} checkboxSelection />
      </div>

    );
  }
}
