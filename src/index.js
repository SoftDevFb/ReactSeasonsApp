import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


//Class Based Component
class App extends React.Component {
    
    constructor(props) {                                        //See notes.txt for constructor function info
        super(props);                                           //See notes.txt for super(props) info
        //This is the only time we do direct
        //assignment to this.state!!!
        this.state = { lat: null, errorMessage: '' };           //Initializes state
                                                            
        window.navigator.geolocation.getCurrentPosition(        //Gets user location using built in API
            position => {
                //We called setState here to update our objects state! 
                this.setState({ lat: position.coords.latitude });
                //We do not use:
                // this.state.lat = position.coords.latitude
            } ,
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    //Required render method for every component created in React!
    render() {
        //Following block of code shows condition rendering
      if(this.state.errorMessage && !this.state.lat) {
          return <div>Error: {this.state.errorMessage}</div>
      }

      if(!this.state.errorMessage && this.state.lat) {
          return <div>Latitude: {this.state.lat}</div>
      }

      return <div>Loading!</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));