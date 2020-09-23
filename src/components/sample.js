import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import TaskList from './task-listing.component';
import Swal from 'sweetalert2';


export default class CreateTask extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTaskTitle = this.onChangeTaskTitle.bind(this);
    this.onChangeTaskDue = this.onChangeTaskDue.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      description: '',
      due: ''
    }
  }

  onChangeTaskTitle(e) {
    this.setState({title: e.target.value})
  }

  onChangeTaskDue(e) {
    this.setState({due: e.target.value})
  }

  onChangeTaskDescription(e) {
    this.setState({description: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const tasks_data = {
      title: this.state.title,
      due: this.state.due,
      description: this.state.description,
      admin_id: '1',
      created_at: '2020-09-22 05:27:57',
      updated_at: '2020-09-22 05:27:57'
    };
//     axios.post('http://localhost:8000/api/store_data', tasks_data)
//       // .then(res => console.log(res.data));
//     console.log(`Expense successfully created!`);
//     console.log(`Name: ${this.state.title}`);
//     console.log(`Amount: ${this.state.due}`);
//     console.log(`Description: ${this.state.description}`);
//     Swal.fire(
//   'Good job!',
//   'Task Added Successfully',
//   'success'
// )

  // axios.post('http://localhost:8000/api/store_data', {
  //   title: 'Fred',
  //   description: 'Flintstone',
  //   due: '2020-09-22 05:27:57',
  //   admin_id: '1',
  //   created_at: '2020-09-22 05:27:57',
  //   updated_at: '2020-09-22 05:27:57'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:8000/api/store_data',
  //   data: {
  //     title: this.state.title,
  //     due: this.state.due,
  //     description: this.state.description
  //   },
  //   validateStatus: (status) => {
  //     return true; // I'm always returning true, you may want to do it depending on the status received
  //   },
  // }).catch(error => {
  //     console.log(error)
  // }).then(response => {
  //   console.log(response);
  // });
  var aid = '1';
  var cdate = '2020-09-22 05:27:57';
  let my_data = JSON.stringify({
    title: this.state.title,
      due: this.state.due,
      description: this.state.description,
      admin_id: aid,
      created_at: cdate,
      updated_at: cdate
  });
  console.log(my_data);
  axios({
    method: 'post',
    headers:{"Content-Type" : "application/json"},
    url: 'http://localhost:8000/api/store_data',
    data: my_data,
  }).catch(error => {
        console.log(error)
    }).then(response => {
      console.log(response);
    });

    this.setState({title: '', description: '', due: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={this.state.title} onChange={this.onChangeTaskTitle}/>
             </Form.Group>
            </Col>
        </Row>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeTaskDescription}/>
        </Form.Group>
        <Row>
            
        <Col>
             <Form.Group controlId="Due">
                <Form.Label>Due</Form.Label>
                        <Form.Control type="date" value={this.state.due} onChange={this.onChangeTaskDue}/>
             </Form.Group>
            </Col>  
        </Row>
       
        <Button variant="primary" size="lg" block="block" type="submit">
          Save Task
        </Button>
      </Form>
      <br></br>
      <br></br>

      <TaskList> </TaskList>
    </div>);
  }
}

