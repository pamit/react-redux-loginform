import React, { Component } from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SiteNavbar extends Component {
    render() {
        return (
            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                {/* <Navbar.Brand>
                    <Link to="/app">App</Link>
                </Navbar.Brand>                 */}
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <Navbar.Brand>
                        <Link to="/about">About</Link>
                    </Navbar.Brand>
                    { this.props.auth.authenticated === false &&  
                        <Navbar.Brand>
                            <Link to="/login">Login</Link> 
                        </Navbar.Brand>
                    }                    
                    { this.props.auth.authenticated === true &&  
                        <Navbar.Brand>
                            <Link to="/logout">Logout</Link> 
                        </Navbar.Brand>
                    }                                       
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}
export default connect(mapStateToProps)(SiteNavbar)
