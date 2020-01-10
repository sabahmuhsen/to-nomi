import React,{ Component } from 'react';

	class SpeakerList extends Component { 
        render () { 
            var {name, image, topic } = this.props;
	 return(
     <div>
         <div class="flex-card">
            <h5>{ name }</h5>

            <img class="example-image" src={require("./images/" + image)} alt="Lights" style={{width:'40%', maxWidth:'300px'}}/>

            <p>{ topic}
            </p>

            <button>Read me</button>
        </div>
     </div>

     );
    }
   
  }
   export default SpeakerList;