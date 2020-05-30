import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell,Card,CardTitle, CardText, Button, CardMenu,IconButton, CardActions} from 'react-mdl';
import Zino from './Zino.JPG';
import Volcano from './Volcano.JPG';
import StaffManager from './StaffManager.JPG';
import Portsite from './Portsite.JPG';
import Precision from './Precision.png';


 class Project extends Component {

    constructor(props) {
        super(props)
    
        this.state = {activeTab: 0 };
    }

    toggleCategories(){

        if (this.state.activeTab === 0){
            return(
                <div>
   <Card shadow={5} style={{width: '25%', margin: 'auto'}}>
    <CardTitle  style={{color: '#fff', height: '400px', backgroundImage: 'url(' + require('./Zino.JPG') + ')' }}>Zino cabs Landind Page UI</CardTitle>
                
                <CardText> Zino Cabs UI was one of my practice projects when i was learning to code Html and Css  </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style= {{color: '#fff'}}>

                    <IconButton name = "share" />
                </CardMenu>
                </Card>
                </div>
            )
    
        }

        else if (this.state.activeTab === 1){
            return(

                <div>
                    <Card shadow={5} style={{width: '25%', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./Volcano.JPG') + ')' }}>Volcano Gym Web App</CardTitle>
                
                <CardText> Volcano Gym was a practice project Using HTML/CSS and JQUERY. It was inspired by my Weight Loss journey. All names and content were totally made up and all images gotten online  </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style= {{color: '#fff'}}>

                    <IconButton name = "share" />
                </CardMenu>
                </Card>
                </div>
            )
        }
        
        else if(this.state.activeTab === 2) {
            return(
                <div>

<Card shadow={5} style={{width: '40%', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./StaffManager.JPG') + ')' }}>Staff Manager Staff Management Application</CardTitle>
                
                <CardText> Inspired by the need at Pilot Finance Limited, my workplace as at the start period of the Project, The application was inteded to ease the  handling and management of all staff details however, it hasn't been completed yet  </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style= {{color: '#fff'}}>

                    <IconButton name = "share" />
                </CardMenu>
                </Card>
                </div>
            )
        }


        else if(this.state.activeTab === 3) {
            return(
                <div>

<Card shadow={5} style={{width: '40%', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '400px', backgroundImage: 'url(' + require('./Precision.png') + ')' }}>Precision Power Source Website</CardTitle>
                
                <CardText> A corporate Website designed for a Power and Energy Company.   </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style= {{color: '#fff'}}>

                    <IconButton name = "share" />
                </CardMenu>
                </Card>
                </div>
            )
        }


        else {
            return(

                <div>
                          <Card shadow={5} style={{width: '40%', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '400px', backgroundImage: 'url(' + require('./Portsite.JPG') + ')'}}>My Portfolio Website</CardTitle>
                
                <CardText> The Source code of this Particular Website. it is my Portfolio Website containing my Resume, Stack and projects  </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style= {{color: '#fff'}}>

                    <IconButton name = "share" />
                </CardMenu>
                </Card>


                </div>
            )
        }

    }

   
    render() {
        return (
            <div className = "category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) =>this.setState ({activeTab: tabId})} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>HTML/CSS/JQUERY</Tab>
          <Tab>BOOTSTRAP</Tab>
          <Tab>WORDPRESS</Tab>
          <Tab>REACT</Tab> 
          </Tabs>
          <section className= "project-grid">
              <Grid className= "project-grid">
                  <Cell col = {12}>
                  <div className="content"> {this.toggleCategories()}> </div>
                  </Cell>
              </Grid>
             
          </section>
            </div>
        )
    }
}

export default Project;