import React from 'react';
import {
  Button,
  Grid,
  Row,
  Col,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem
}
  from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch
}
  from 'react-router-dom';

export default class MainTemplate extends React.Component {
  render() {
    const Home = () => <Col sm={9} sm-offset={3} md={10} md-offset={2}><p>Home!</p></Col>;
    const Tournament1 = () => <p>Tornament1</p>;
    const Tournament2 = () => <p>Tornament2</p>;
    const Tournament3 = () => <p>Tornament3</p>;
    const Contact = () => <p>Contact!</p>;
    return (
      <div>
        <Router>
          <div>

            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Social Betting</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown title="Tournament" id="basic-nav-dropdown">
                    <MenuItem><li>
                      <Link to="/tournament1">Tornament1</Link>
                    </li></MenuItem>
                    <MenuItem><li>
                      <Link to="/tournament2">Tornament2</Link>
                    </li></MenuItem>
                    <MenuItem><li>
                      <Link to="/tournament3">Tornament3</Link>
                    </li></MenuItem>
                  </NavDropdown>

                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    Link Right
            </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link Right
            </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>


            <div className="container-fluid hidden-xs">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tournament1" exact component={Tournament1} />
                <Route path="/tournament2" exact component={Tournament2} />
                <Route path="/tournament3" exact component={Tournament3} />

              </Switch>
            </div>
          </div>
        </Router>

      </div>
    );

  }
}