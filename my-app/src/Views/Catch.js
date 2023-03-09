import React, { Component } from 'react'
import Demon from '../components/Demon';


export default class Catch extends Component {
  constructor() {
    super();
    this.state = {
        demons: [],
        searchInput: ''
    }
  };




  showDemons = () => {
    return this.state.demons.map(p => <Demon key={p.id} demonInfo={p} catchDemons={this.catchDemons} user={this.props.user}/>)
  };

  getDemons = async (demon_name) => {
    // const name = e.target.name.value;
    // const hp = e.target.hp.value;

  
    const url = `http://127.0.0.1:5000/demon/${demon_name}`

    const res = await fetch(url);

    // const options = {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: name,


    //   })
    // }
    const data = await res.json();
    console.log(data)
    if (data.status==='ok'){
      this.setState({demons:[data.demon]})
    }

    
  }

  componentDidMount = () => {
    // this.getDemons();
  }

  handleInputChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const demon_name = e.target.input1.value
    this.getDemons(demon_name)
    // const demon = this.state.demons.find(
    //   d => d.name.toLowerCase() === this.state.searchInput.toLowerCase()
    // );
    // if (demon) {
    //   this.setState({ demons: [demon], searchInput: '' });
    // } else {
    //   alert('Demon not found!');
    // }
  };


  render() {
    return (
      <div>
        {this.showDemons()}
      <form onSubmit={this.handleSubmit}>
        <label style={{fontSize: 38, display: 'block', marginleft: 'auto', marginright: 'auto'  }}>
          Search demon:
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleInputChange}
            name="input1"
          />
        </label>
        <button style={{ fontFamily: 'Sans', fontWeight: 500, letterSpacing: 3, fontSize: 38 }} type="submit">Search</button>
      </form>
      
    </div>
    )
  }


   
}

