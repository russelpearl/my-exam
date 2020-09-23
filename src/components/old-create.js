import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import TaskList from './task-listing.component';
import Swal from 'sweetalert2';

// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"; 
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.headers.common['X-CSRF-TOKEN'];
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.headers.post['X-CSRF-Token'] = response.data._csrf;
// headers: { 'X-CSRF-TOKEN': 'xxx' },
// const axios = require('axios');
// axios.defaults.headers.common['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');

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
     const task = {
      title: this.state.title,
      due: this.state.due,
      description: this.state.description
      // admin_id: '1'
    };

    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    //   'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
    // },

    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content
    }
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8000/api/store_data',
    //   data: { "task" : task },
    // }).catch(error => {
    //       console.log(error)
    //   }).then(response => {
    //     console.log(response);
    //   });
    
    console.log(task);

    axios.post('http://localhost:8000/api/store_data/', task, {"headers": headers})
      .then(res => console.log(res.data));
//     Swal.fire(
//   'Good job!',
//   'Task Added Successfully',
//   'success'
// )

    this.setState({title: '', description: '', due: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <meta name="csrf-token" content="{{ csrf_token() }}" />
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

