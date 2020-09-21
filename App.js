import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ExpensesList from "./src/components/expenses-listing.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            

            <Nav className="justify-content-end">
              <Nav>
              
                <Link to={"/expenses-listing"} className="nav-link">
                  Expenses List
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
                <Route path="/expenses-listing" component={ExpensesList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;