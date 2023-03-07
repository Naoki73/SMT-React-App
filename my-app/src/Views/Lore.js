import React, { Component } from 'react'

export default class Lore extends Component {
  render() {
    return (


      
      <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <img src= {`http://smt-app1111.b-cdn.net/${this.props.demonInfo.name}.png`}/>
                <h5 className="card-title">{this.props.demonInfo.name}</h5>
                <p className="card-text">Hp: {this.props.demonInfo.hp}</p>
                <p className="card-text">Alignment:{this.props.demonInfo.alignment.ethical}-{this.props.demonInfo.alignment.moral}</p>
                <p className="card-text">Str: {this.props.demonInfo.stats.st}</p>
                <p className="card-text">Ma: {this.props.demonInfo.stats.ma}</p>
                <p className="card-text">Vi: {this.props.demonInfo.stats.vi}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
}
