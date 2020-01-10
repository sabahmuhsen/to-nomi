
//import React from 'react';
import React ,{ Component } from 'react'
import SpeakerList from './SpeakerList';
//import  './images';
import './css/style.css'
//import Home from './Home';
class App extends Component {
  render (){
  return(
    <div >
      <header>
        <input type="checkbox" id="nav-toggle" />
        <label for="nav-toggle" class="color">Menu</label>
        <nav>
            <ul>
                <li>Animal Prod Co</li>
                <li><a href="#service">Service</a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <SpeakerList name="Lam" image="lam.jpg" topic="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        <SpeakerList name="Gos" image="gos.jpg" topic="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit" />
        <SpeakerList name="Dog" image="hund.jpg" topic="Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit adipiscing elit" />
        <SpeakerList name="Cow" image="ko.jpg" topic="Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit" />
        <SpeakerList name="Pork" image="gris.jpg" topic="Lorem ipsum dolor sit amet, consectetur adipiscing eorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderitlit" />
        <SpeakerList name="Get" image="get.jpg" topic="Lorem ipsum dolor sit amet, consectetur adiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderitpiscing elit" />
       
        
        <div class="flex-card" id="service">
            <h4>Services
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>

            <button>Read me</button>
        </div>
        <div class="flex-card" id="aboutus">
            <h4>About Us
            </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>
            <button>Read me</button><br/>
        </div>

        <div class="flex-card" id="contact">
            <h4>Contact</h4>
            <ul>
                <li><i class="fa fa-mobile"></i>-0704003208</li>
                <li><i class="fa fa-envelope-o"></i>-sammuhsen2002@yahoo.com</li>
                <li><i class="fa fa-envelope-o"></i>-sabah.muhsen@student.kyh.se</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit </p>

            <button>Read me</button><br/><br/>
        </div>


    </div>

    <footer>
        <center>
            <h3> Animal Products Company </h3>
        </center>
    </footer>


    </div>
  )
 }
}

export default App
