import React, {Component} from 'react';
import './App.css';

import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home';
import Contact from 'material-ui/svg-icons/communication/contact-mail';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NavBar: false,
            viewChild: false,
        }
    }

    toggleNavBar() {
        this.setState({NavBar: !this.state.NavBar})
    }

    handleCloseChild() {
        this.setState({NavBar: false});
        this.setState({viewChild: true})
    }

    handleCloseNoChild() {
        this.setState({NavBar: false});
        this.setState({viewChild: false})
    }

    render() {
        if (this.state.viewChild === true) {
            return (
                <MuiThemeProvider>
                    <div className="App">
                        <AppBar
                            title="Gfriend Fan Site"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.toggleNavBar.bind(this)}/>
                        <Drawer
                            docked={false}
                            width={225}
                            open={this.state.NavBar}
                            onRequestChange={this.toggleNavBar.bind(this)}>
                            <Link to="/">
                                <MenuItem primaryText="Home"
                                          leftIcon={<Home/>}
                                          onClick={this.handleCloseNoChild.bind(this)}
                                />
                            </Link>
                            <Link to="/contact">
                                <MenuItem primaryText="Contact Us"
                                          leftIcon={<Contact/>}
                                          onClick={this.handleCloseChild.bind(this)}
                                />
                            </Link>
                        </Drawer>
                        <p className="App-intro">
                            {this.props.children}
                        </p>
                    </div>
                </MuiThemeProvider>);
        } else {
            return (
                <MuiThemeProvider>
                    <div className="App">
                        <AppBar
                            title="Gfriend Fan Site"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.toggleNavBar.bind(this)}/>
                        <Drawer
                            docked={false}
                            width={225}
                            open={this.state.NavBar}
                            onRequestChange={this.toggleNavBar.bind(this)}>
                            <Link to="/">
                                <MenuItem primaryText="Home"
                                          leftIcon={<Home/>}
                                          onClick={this.handleCloseNoChild.bind(this)}
                                />
                            </Link>
                            <Link to="/contact">
                                <MenuItem primaryText="Contact Us"
                                          leftIcon={<Contact/>}
                                          onClick={this.handleCloseChild.bind(this)}
                                />
                            </Link>
                        </Drawer>
                        <p className="App-intro">
                            Welcome to a data driven site about GFRIEND
                        </p>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

export default App;
