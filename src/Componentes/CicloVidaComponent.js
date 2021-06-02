import React,{Component} from 'react';

class CicloVidaComponent extends Component{

  constructor(props){
    super(props);
    console.log("SE ejecuta el constructor");
    this.state={
      nombre:'Codigo Rupestre  - Space Native'
    }
  }

componentWillMount(){
  console.log('Se ejecuta componentWillMount');
  this.state={nombre:'¿Porque me interesa participar en esta tribu?'}
}

componentDidMount(){
  console.log('Se ejecuta componentDidMount');
  this.state={nombre:'¿Como me visualizo dentro de 4 años?'}
}
  handleClick=()=>{
    console.log("Se ejecuta evento");
    this.setState({nombre:'Me interesa formarme como lider de proyecto y tener conocimiento técnicos sobre arquitectouras de plataformas cloud, compartir puntos de vista y asi hacer un feedback entre la comunidad..'});
  };

  render(){
    console.log('Se ejecuto el render');
    return(
      <div>
        <h2>Ciclo de vida de un component en react</h2>
        <p>{this.state.nombre}</p>
        <p>Aprendiz: {this.props.aprendiz}</p>
        <button onClick={this.handleClick}>Ejercutar Evento</button>
      </div>
    );
  }
}

export default CicloVidaComponent;
