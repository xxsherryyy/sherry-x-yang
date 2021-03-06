import React, { Component } from 'react';
import './sass/Main.scss';
import './sass/App.scss';
import { withStyles } from '@material-ui/core/styles';
// import ReactDOM from 'react-dom';

import About from './components/About.jsx'
// import App from './App.js'
import Portfolio from './components/Portfolio.jsx';
// import Contact from './components/Contact.jsx'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#45cab6',
      main: '#17BDA4',
      dark: '#108472',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e9887e',
      main: '#E46B5E',
      dark: '#9f4a41',
      contrastText: '#000',
    },
  }
});
// const styles = theme => ({
//   button: {
//     background: "#17BDA4",
//      padding: 50,
//      margin: 20,

//     // borderColor: "#17BDA4"

//   }});



// function Main() {
class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (

      <div className="App">
     
      
      <main id="home" style={{height: '100%', flex:1, marginLeft: 5}}>
        <MuiThemeProvider theme={theme}>
          {/* <Link to = {'/about/${props.user}'}> */}

          {/* </Link>  */}
<div id = "home" >
          <h1 class="lg-heading">
            Sherry <span class="text-secondary"> X </span> Yang
            </h1>
            <br/>
          <h2>
            Developer <span class="text-secondary"> X </span> Designer <span class="text-secondary"> X </span> Consultant
            </h2>

          <div class="icons">
            <a target="_blank" href="https://github.com/xxsherryyy" rel="noopener">
              <i class="fab fa-github fa-3x"></i>
            </a>
            
            <a target="_blank" href="https://www.behance.net/xxsherryyy" rel="noopener">
              <i class="fab fa-behance fa-3x"></i>
            </a>
            
            <a target="_blank" href="https://www.linkedin.com/in/sherry-x-yang/" rel="noopener">
              <i class="fab fa-linkedin fa-3x"></i>
            </a>

            <a target="_blank" href="https://medium.com/@xxsherryyy"><i class="fab fa-medium fa-3x"></i></a>
          </div> 
          {/* <Button style={{ color: "#1B94A1", borderColor: "#1B94A1" }} variant="raised" >
            About Me
          </Button> */}
</div>
        </MuiThemeProvider>
        {/* <Divider h="20px"/> */}
        <About />
         
         <Portfolio/>
         
         {/* <Contact /> */}
      </main>
     
  </div>
    );
  }
}



// ReactDOM.render(<App />, document.querySelector('#app'));

export default Main;
