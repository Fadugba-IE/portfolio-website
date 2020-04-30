import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from './image.jpg'; 


 class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100', margin: 'auto'}} >
            <Grid className= 'landing-grid'>
                <Cell col= {12}>
                    <img 
                    src = {img} 
                    alt = 'Iyanuoluwa Fadugba'
                    className = 'portfolio-image'
                    />
                    <div className = 'banner-text'>
                        <h1>Front End Software Developer</h1>
                        <hr/>
                        <p> HTML/CSS | BOOTSTRAP | JAVASCRIPT | JQUERY | REACT JS | WORDPRESS </p>
                        <div className = 'social-links'>

                       <a href="http://google.com" rel = "noopener noreferrer" target = "_blank" ></a>
                       <i class="fa fa-linkedin-square" aria-hidden = "true" />

                       <a href="http://google.com" rel = "noopener noreferrer" target = "_blank" ></a>
                       <i class="fa fa-github-square" aria-hidden = "true" />

                       <a href="http://google.com" rel = "noopener noreferrer" target = "_blank" ></a>
                       <i class="fa fa-twitter-square" aria-hidden = "true" />

                   </div>
                    </div>
                   
                </Cell>
                </Grid> 
            </div>
        )
    }
};

export default LandingPage;