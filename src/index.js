import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay.js'
import Loader from './Loader.js'
class App extends React.Component {
    constructor(props) {
        super(props);
        // this is only time we do orect assignment to this.state
        this.state = { lat: null, errorMessage: '', };
    }
    // we can remove constructor and initialize similarly
    // state = {lat : null}
    componentDidMount() {
        console.log('My component is rendered');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {

                // Any other time we need to asign using setState
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                console.log(err)
                this.setState({ errorMessage: err.message })
            }
        );
    }
    componentDidUpdate() {
        console.log('My component was just updated');
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error={this.state.errorMessage}</div>
        }
        if (this.state.lat) {
            return <div> <SeasonDisplay lat={this.state.lat} /></div>
        }
        return <div > <Loader /> </div>
    }
    render() {
        // if (this.state.errorMessage && !this.state.lat) {
        //     return <div> Error={this.state.errorMessage}</div>
        // }
        // if (this.state.lat) {
        //     return <div> <SeasonDisplay lat={this.state.lat} /></div>
        // }
        // return <div > <Loader /> </div>
        
        // Instead of conditionals in render we can do it like this
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );

    }
}

ReactDom.render(<App />, document.querySelector('#root'));