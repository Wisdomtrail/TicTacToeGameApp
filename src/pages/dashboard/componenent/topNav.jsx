import React from "react";
import '../styles/TopNav.css';
import loginIcon from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/login.svg';
import customer from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/customer.svg';
import business from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/business.svg';
import list from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/List.svg';
import crystal from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/crystal.svg';
import programBox from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/program.svg';
import man from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/man.svg';
import men from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/Men.svg';
import salemen from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/salesman.svg';
import vendor from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/vendor.svg';
import rocketMan from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/rocketMan.svg';
import board from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/board.svg';
import track from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/track.svg';
import playBook from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/playBook..svg';
import xO from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/xO.svg';
import bottom from '/Users/sunep/Desktop/reactProject/myreactapp/src/assets/bottom.svg';
class TopNav extends React.Component{
    render(){
        return(
            <div class="mainContainer">
            <div class="topNav">
                <div class="ptag">
                    <p class="logo">Zomentum</p>
                </div>
                <nav>
                    <li><a href="https://google.com" class = "names1">Features</a></li>
                    <li><a href="https://semicolon.africa" class="names2">Integration</a></li>
                    <li><a href="https://github.com" class="names3">Pricing</a></li>
                    <li><a href="https://jw.org" class="names4">Company</a></li>
                    <li><a href="https://www.freecodecamp.org" class="namee5">Blog</a></li>
                    <div class="getDemo">
                        <p class="demo">Get a Demo</p>
                    </div>
                    <div class="login">
                        <img src={loginIcon} alt="fav"></img>
                        <p class="ptag_login">Login</p>
                    </div>
                </nav>
            </div>

            <div class="slanted-bg">
            <div class="Text">
                <h1 >Find the right partners to <br/> fuel your business growth</h1> 
                <h6>
                    <p>Join a vibrant community of MSPs to forge long-lasting relationships with partners <br /> that help you create excellent  customer experiences</p>
                </h6>
                <div class="button">
                  Register today
                </div>
            </div>
            <div class="picture"> 
                <div class="firstPic"><img src={customer} alt="fav"></img></div>
               <div class="secondPic"><img src={business} alt="business"></img></div>
            </div>
            </div>
            <div class="secondContainer">
                <center class="sellBox">List. Sell. Grow</center>
                <center class="box"><img src={list} alt=""></img></center>
                <div class="crystal"><img src={crystal} alt=""></img></div>
            </div>
                <div class="thirdContainer">
                <div class="programBox"><img src={programBox} alt=""></img></div>
                <div class="man"><img src={man} alt=""></img></div>
            </div>
                <div class="fourthContainer">
                <div class="Men"> <img src={men} alt=""></img></div>
                <div class="vendor"> <img src={vendor} alt=""></img></div>
            </div>
                <div class="fifthContainer">
                <div class="salesMan"> <img src={salemen} alt=""></img></div>
                <div class="rocketMan"> <img src={rocketMan} alt=""></img></div>
            </div>
                <div class="sixthContainer">
                <div class="board"><img src={board} alt=""></img></div>
                <div class="track"><img src={track} alt=""></img></div>
            </div>
            <div class="seventhContainer">
                <div class="playBook"> <img src={playBook} alt=""></img></div>
                <div class="xO"><img src={xO} alt=""></img></div>
            </div>
            <div>
                <img  class="lastContainer" src={bottom} alt=""></img>
            </div>
            </div> 
        )
    }
}
export default TopNav;
