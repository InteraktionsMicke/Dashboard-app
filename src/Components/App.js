import React, { Component } from 'react';
import Weather from './Weather';
//import logo from '../logo.svg';
import Clock from './Clock'
import '../App.css';



class App extends Component {
  render() {
    return (
<div>        
    <div class="row1 container">
        
        <Weather />
        

        <div class="col-xs-3 box todo-list">
            <div class="col-xs-12 inside-box">
                <h2>ATT GÖRA</h2>

                    <ul id="myUL">
                        <li>Hit the gym</li>
                        <li>Pay bills</li>
                        <li>Meet George</li>

                    </ul>

                <div id="myDIV" class="header">
                    <input type="text" id="myInput" placeholder="Title..."></input>
                    <span onclick="newElement()" class="addBtn">Add</span>
                </div>

            </div>
        </div>

        <div class="col-xs-4 box">
            <div class="col-xs-12 inside-box calendar ">
                <h2>KALENDER</h2>
            </div>
        </div>

        <div class="col-xs-2 box weekly">
            <div class="col-xs-12 inside-box">
                <h2>DENNA VECKA</h2>
            </div>
        </div>

    </div>
    
    <div class="row2 container">

        <div class="col-xs-2 box ">
            <div class="col-xs-12 inside-box box-low weekDay">
                <h2>VECKA</h2>
                <p id="week"></p>
                <p id="day"></p>
            </div>

        <Clock />
        </div>
        

        <div class="col-xs-3 box ">
            <div class="col-xs-12 inside-box">
                <h2>MUMMA</h2>
            </div>
        </div>
        
        <div class="col-xs-3 box">
            <div class="col-xs-12 inside-box box-low icon">
                <div class="col-xs-12 icon-wrapper">
                   <h2>SOCIALA</h2>
                </div>
            </div>

        <div class="col-xs-12 inside-box box-low weather">
            <div id="weatherInfo"></div>
            </div>
        </div>

        
        
        <div class="col-xs-4 box links">
        <div class="col-xs-12 inside-box">
            <h2>LÄNKAR</h2>


            <div class="col-xs-4 links-left">
                <ul>
                    <a href="https://reddit.com/">
                        <li>Reddit</li>
                    </a>
                    <a href="http://www.stockholmshus9.se/">
                        <li>Tvättid</li>
                    </a>

                </ul>
            </div>
            <div class="col-xs-4 links-center">
                <ul>
                    <a href="#">
                        <li>Zenit</li>
                    </a>
                </ul>
            </div>


            <div class="col-xs-4 links-right">
                <ul>
                    <a href="#">
                        <li>Slack</li>
                    </a>
                </ul>
            </div>



        </div>

    </div>



    </div>

</div>      
   
    );
      
  }
}


export default App;
