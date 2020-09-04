import React, { Component } from 'react';
import { Grid, Cell,Button } from 'react-mdl';
import img from './image.jpg'; 
import FileSaver from 'file-saver';


const saveFile = () =>{
FileSaver.saveAs(
    process.env.PUBLIC_URL + "/asset/cv.pdf",
    "iyanuoluwa_fadugba_resume.pdf"
    );
};




 class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} >
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

                        <div  className = "button-section">
                        <Button className = "landing-buttons" onClick = {saveFile}>Download Resume</Button>

                        </div>
                        <div className = 'social-links'>

        <a href="https://www.linkedin.com/in/fadugba-iyanuoluwa-079596127/" rel = "noopener noreferrer" target = "_blank" > <i class="fa fa-linkedin-square" aria-hidden = "true" />{null}</a>
                      

        <a href="https://github.com/Fadugba-IE" rel = "noopener noreferrer" target = "_blank" ><i class="fa fa-github-square" aria-hidden = "true" />{null}</a>
                       

                       <a href="https://twitter.com/FadugbaI" rel = "noopener noreferrer" target = "_blank" ><i class="fa fa-twitter-square" aria-hidden = "true" />{null}</a>
                       

                   </div>
                    </div>
                   
                </Cell>
                </Grid> 
            </div>
        )
    }
};

export default LandingPage;

/* bshbfhb */