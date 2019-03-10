import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import images from './images.jpg';
import humidite from './humidite.png'; // Tell Webpack this JS file uses this image
import nuage from './nuage.jpg'; // Tell Webpack this JS file uses this image
import degres from './degres.jpg'; // Tell Webpack this JS file uses this image


class App extends Component {

  constructor(){
    super();

    this.state={

      city:"",
      result:{},
      test:"",
      buttonClicked: false
        }
        
  }

  changeValue = (event) => {
  const city = event.target.value;
  this.setState({city})}

seeWeather = () =>{

axios.get('http://api.apixu.com/v1/forecast.json?key=7573e5ad967c48eb884125727190903&q='+this.state.city) //consommation des action des api: commande npm i axios
.then(res=>{
console.log(res.data);
//this.setState({ result: res.data,test: JSON.stringify(res.data)})} //objet json dans une date
this.setState({ result: res.data,buttonClicked:true})

} //objet json dans une date

);
}
render(){
return(
  <div>
  <div><center>
  <h1 className="h1">Check your weather country</h1> <br/><br/>
  <h3>Please enter a city</h3><br/><input type="text" onChange={this.changeValue} name="city" className="input"/>{' '}
  <button onClick={this.seeWeather} className="boutton">Show</button>
 </center></div><br/><br/><br/><br/>
  {this.state.buttonClicked && <div className="container"> <div className="row">
    <div className="col-sm">
    <img src={images} className="image" alt="titre1" />
    <p><h3>{this.state.result.current.condition.text}</h3></p>
    </div> <br/>
    <div className="col-sm">
    <img src={humidite} className="image" alt="titre2"/>
    <h3><p>{this.state.result.current.humidity}</p></h3>
    {/* {this.state.result !== {} && <p> {this.state.result.current.feelslike_c} </p>} */}
    {/* {this.state.feelslike_c} */}
    </div><br/>
    <div className="col-sm">
    <img src={nuage} className="image" alt="titre3"/>
    <h3><p>{this.state.result.current.cloud}</p></h3>

    </div><br/>
    <div className="col-sm">
    <h3 className="h3"> Local time :  <br/><br/><br/><p>{this.state.result.location.localtime}</p>
</h3>
    </div>
  </div></div>}
</div>
)
}
}

export default App;
