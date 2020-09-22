import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TaskList from "./src/components/task-listing.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/task-listing"} className="nav-link">
                  Task List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route path="/task-listing" component={TaskList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;