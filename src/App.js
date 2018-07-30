import React, { Component } from 'react';
import { Navbar, Button,Nav, Popover, OverlayTrigger, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

// const auth = new Auth();
// auth.login();

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
        persons:[], 
        profile:{},
        existPerson: false,
    };
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }



  logout() {
    if (window.confirm(`Voulez-vous vraiment vous déconnecter?`)){
    this.props.auth.logout();
    }
  }

  // logout() {
  //     this.logout();
  // }

  renewToken() {
    this.props.auth.renewToken();
  }
  
  // accede au formulaire de création
  goToCreate = () =>{
    this.props.history.push('/create');
  }
  
  componentDidMount(){
      let isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'));
      let userEmail =sessionStorage.getItem('userEmail');
      let userName =sessionStorage.getItem('userName');

      this.setState({
        isAdmin, userEmail, userName
      })
  }

  render() {
    const {isAuthenticated} = this.props.auth;
    const { userEmail, isAdmin, userName} = this.state;

    console.log("isAdmin", isAdmin);
    console.log("user", userName);
    
    return (
      <div className="App ">
        <div className="App-nav "> {/*navbar navbar-default navbar-fixed-top*/}
          <header className="App-header ">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <a href="http://www.serli.com/">
              <img src='logo-serli-reserve.png' className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">Lunch at work</h1>
          </header>

          <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <a href="#">Auth0 - React</a> */}
              < Link className="nav-link" to="/home">Page d'accueil <span className="sr-only">(current)</span></Link>
            </Navbar.Brand>
            <button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Accueil
            </button>
            {
              !isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    // onClick={this.login.bind(this)}
                    onClick={ () => this.login()}
                  >
                    Se connecter
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this,'lunchvue')}
                  >
                    Lunch at work
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this,'trombinoscope')}
                  >
                    Trombinoscope
                  </button>
                )
            }
            {
              isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={ () => this.logout()}
                  >
                    Se deconnecter
                  </button>
                )
            }
            {
              isAuthenticated() && (
                <Link classeName ="profil" to="/profile">Votre profile</Link>
                )
            }
          </Navbar.Header>
          
        </Navbar>
      {/* // <div className="App">
      //   <div className="App-nav">
      //     <header className="App App-header ">
      //         <a href="http://www.serli.com/">
      //           <img src='logo-serli-reserve.png' className="App-logo" alt="logo" />
      //         </a>
      //     </header>

      //     <Navbar>
      //       <Navbar.Header>
      //          <Navbar.Brand>
      //           <Link className="nav-link" to="/home">Page d'accueil <span className="sr-only">(current)</span></Link>
      //         </Navbar.Brand>
      //       </Navbar.Header>

      //     { isAuthenticated () && 
      //       <Nav>
      //         <NavItem eventKey={1}><span><Link to="/trombinoscope">Trombinoscope</Link></span></NavItem> 
      //         <NavItem eventKey={1}><span><Link to="/lunchvue">Lunch at work</Link></span></NavItem> 
      //       </Nav>
      //     }

      //     {  
      //       <Nav pullRight>
      //         <OverlayTrigger trigger="click" placement="bottom" 
      //           overlay={
      //             <Popover id="popover-positioned-bottom" title={'Info Serlien:'}>
      //                 <div className="">
      //                   { isAuthenticated() ? (
      //                   <div className="">
      //                     <div className="">
      //                       <b>{userName}</b>
      //                     </div>
                      
      //                     <div className="">
      //                       <Link to="/profile">Votre profile</Link>
      //                     </div>
                        
      //                     <div className="">
      //                       <a href={`mailto:${userEmail}`}><i>Accerder à ma boîte email</i></a>
      //                     </div>
                      
      //                     <div className="" style={{fontSize:"13px"}}>
      //                       <button onClick={this.logout.bind(this)}>Déconnexion</button> {' '}
      //                       <button onClick={ () => this.login()}> Se reconnecter </button>
      //                     </div>
      //                   </div>) :

      //                   (
      //                   <div className="">
      //                     <div className="">
      //                       Vous n'êtes pas connecté.
      //                     </div>
                        
      //                     <div className="" style={{fontSize:"13px"}}>
      //                       <button onClick={ () => this.login()}> Se connecter </button>
      //                     </div>
      //                   </div>)
      //                   }
      //                 </div>
                      
      //             </Popover>}
      //         >
      //         {/* bouton user */}
      {/* //           <button type="button" className="bouton1">
      //             <span className="glyphicon glyphicon-user"></span>
      //           </button>
      //         </OverlayTrigger>
      //       </Nav> */}
      {/* //     }

      //   </Navbar>

      //     { !isAuthenticated() && ( */}
      {/* //       <div>
      //       Bienvenue sur la plateforme Serli, pour acceder aux différents services <button onClick={ () => this.login()} style={{border: "0px"}}> Se connecter </button>
      //       </div> )
      //     } */} 
            
        </div>
      </div>
    );
  }
}

export default App;


