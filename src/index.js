import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


//Class Based Component
class App extends React.Component {
    render() {
        //Gets user location using built in API
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        
        return <div>Latitude: </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));