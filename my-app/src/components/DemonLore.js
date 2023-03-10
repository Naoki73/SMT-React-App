import React, { Component } from 'react'
import "./Nav.css"

export default class DemonLore extends Component {


  componentDidMount = () => {
    console.log(this.props);
  }


  catchDemons = async () => {
    const url = `http://127.0.0.1:5000/catch_demon/${this.props.demonInfo.name}`

    const options = {
      method: "POST",
      headers: { Authorization: `Bearer ${this.props.user.apitoken}` }
    }

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data)
    if (data.status === 'ok') {
      // this.setState({}) catch successful, redirect to profile page
    }


  }




  render() {
    return (

      <div className="card" style={{ margin: "auto", padding: "1px", width: "50rem", color: "#b454ff", fontSize: "34px", textAlign: "center", backgroundImage:"url(./images/SMT wallpaper 3.jpg)" }}>
        <div className="card-body">
          <img src={`http://smt-app1111.b-cdn.net/${this.props.demonInfo.name}.png`} style={{ width: "25rem", imageRendering:"auto" }} />
          <h5 className="card-title" style={{ fontSize: "80px", color: "#bb83f2", letterSpacing: "6px", lineHeight: "1.5" }}>{this.props.demonInfo.name}</h5>
          <p className="card-text" style={{ lineHeight: "0.8", letterSpacing: "2px", color:"#bb83f2"  }}>Lore:  {this.props.demonInfo.lore}</p>
          <button onClick={this.catchDemons} className="btn btn-primary">Catch</button>
        </div>
      </div>
    )
  }
}
