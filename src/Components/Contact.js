import React, { Component } from 'react';
import {Grid, Cell, List,ListItem, ListItemContent } from 'react-mdl';
 import img from './image.jpg'; 

 class Contacts extends Component {
    render() {
        return (
            <div className = 'contact-body'>
                <Grid className= 'contact-grid'>
                <Cell className = 'contact-left' col={6}>
                    <h2>Fadugba Iyanuoluwa</h2>
                    <img 
                    src = {img} 
                    alt = 'Iyanuoluwa Fadugba'
                    style= {{height: '250px', paddingTop: '80px'}}  />
                </Cell>


                <Cell col={6}>
                    <h2>Contact Me </h2>
                    <hr />
                    <div className= "contact-list">

                    <List>
                <ListItem>
                    <ListItemContent style={{ fontFamily: 'Oxanium'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>(+234) 8134792044</ListItemContent>
                </ListItem>
                <ListItem>

                <ListItemContent style={{ fontFamily: 'Oxanium'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>fadugba.iyanu@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                <ListItemContent style={{ fontFamily: 'Oxanium'}}>
                        <i className="fa fa-linkedin" aria-hidden="true"/>Fadugba Iyanuoluwa</ListItemContent>
                </ListItem>

                <ListItem>
                <ListItemContent style={{ fontFamily: 'Oxanium'}}>
                        <i className="fa fa-github" aria-hidden="true"/>Fadugba-IE</ListItemContent>
                </ListItem>
                </List>
               </div>
               </Cell>
                </Grid>
                 
               
            </div>
        )
    }
}

export default Contacts;