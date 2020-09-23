import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditTask from "./edit-task.component";
import TaskList from "./task-listing.component";
import CreateTask from "./create-task.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-task"} className="nav-link">
              Task manager
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-task"} className="nav-link">
                  Create Task
                </Link>
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
                <Route exact path='/' component={CreateTask} />
                <Route path="/create-task" component={CreateTask} />
                <Route path="/edit-task/:id" component={EditTask} />
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