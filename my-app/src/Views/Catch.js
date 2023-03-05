import React, { Component } from 'react'
import Demon from '../components/Demon';


export default class Catch extends Component {
  constructor() {
    super();
    this.state = {
        demons: []
    }
  };




  showDemons = () => {
    return this.state.demons.map(p => <Demon key={p.id} demonInfo={p}/>)
  };

  getDemons = async () => {
    const res = await fetch('http://127.0.0.1:5000/demons');
    const data = await res.json();
    console.log(data)
    if (data.status==='ok'){
        this.setState({demons:data.Demons})
        
    }

    
  }
  componentDidMount = () => {
    this.getDemons();
  }

  render() {
    return (
        <div>
            {this.showDemons()}
        </div>
    )
  }


   
}

