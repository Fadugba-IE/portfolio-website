import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell,Card,CardTitle, CardText, Button, CardMenu,IconButton, CardActions} from 'react-mdl';





 class Project extends Component {

    constructor(props) {
        super(props)
    
        this.state = {activeTab: 0 };
    }

    toggleCategories(){

        if (this.state.activeTab === 0){
            return(
                <div>
                <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
<CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./Volcano.JPG') + ')' }}>Volcano Gym Web App</CardTitle>
            
            <CardText> Volcano Gym was a practice project Using HTML/CSS and JQUERY. It was inspired by my Weight Loss journey. All names and content were totally made up and all images gotten online  </CardText>
            <CardActions border>
                <Button colored onClick = {()=> window.open ("https://github.com/Fadugba-IE/volcano-gym")}>VIEW PROJECT</Button>
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
                    <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./Diary.jpg') + ')' }}>Online Diary App</CardTitle>
                
                <CardText> "Online diary app" is a web aplication developed using React Js. The project idea is an online diary where users can register, log in to a dashboard, write memories and store it for future reference </CardText>
                <CardActions border>
                    <Button colored onClick = {()=> window.open ("https://5f4ebd5b1877080008938c91--iyanu-diary-app.netlify.app/")}>VIEW PROJECT</Button>
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

<Card shadow={5} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./Entertainment.jpg') + ')' }}>Entertainment Website</CardTitle>         
                <CardText> "Entertainment Website" is a portfolio project. It is a design of a layout of an entertainment company. it contains a carousel dislaying a slideshow of artistes, a news section displaying news and gallery with a video player embedded in it  </CardText>
                <CardActions border>
                <Button colored onClick = {()=> window.open ("https://iyanu-entertainment-company.netlify.app")}>VIEW PROJECT</Button>
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

<Card shadow={5} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./Portfolio.jpg') + ')' }}>Portfolio Website</CardTitle>
                
                <CardText>This is my personal portfoilio website. it was developed using React js. it contains details about myself, a button to download my resume on the homepage, a button to send a mail, a section with a list of projects and a contact section   </CardText>
                <CardActions border>
                <Button colored onClick = {()=> window.open ("https://iyanu-portfolio.netlify.app")}>VIEW PROJECT</Button>
                </CardActions>
                <CardMenu style= {{color: '#fff'}}>

                    <IconButton name = "share" />
                </CardMenu>
                </Card>
                </div>
            )
        }


        else  {
            return(

                <div>
                          <Card shadow={5} style={{width: '300px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '300px', backgroundImage: 'url(' + require('./Veritas.jpg') + ')'}}>Veritas Hair</CardTitle>
                
                <CardText> "Laverita Hair Website". this is a project developed using Wordpress. It is a company websit for a hair beauty place located at IKoyi, Lagos state, Nigeria </CardText>
                <CardActions border>
                <Button colored onClick = {()=> window.open ("https://laveritahair.com/")}>VIEW PROJECT</Button>
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
          <Tab>HTML/CSS/JQUERY</Tab>
          <Tab>REACT JS</Tab>
          <Tab>REACT JS</Tab>
          <Tab>REACT JS</Tab>
          <Tab>WORDPRESS</Tab> 
          </Tabs>

          
          <section className= "project-grid">
              <Grid className= "project-grid">
                  <Cell col = {12}>
                  <div className="content"> {this.toggleCategories()} </div>
                  </Cell>
              </Grid>
             
          </section>
            </div>
        )
    }
}

export default Project;