import React, { Component } from 'react';

class SpeakerList extends Component {
    render(){
        return(
            <div>

 <div class="flex-card">
            <h5>Lame</h5>

            <img class="example-image" src={require("./images/lam.jpg")} alt="Lights" style={{width:'40%', maxWidth:'300px'}}/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit
            </p>

            <button>Read me</button>
        </div>
            </div>
        )
    }
}
export default SpeakerList;
