import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditTask extends Component {

  constructor(props) {
    super(props)

    this.onChangeTaskTitle = this.onChangeTaskTitle.bind(this);
    this.onChangeTaskDue = this.onChangeTaskDue.bind(this);
    this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: '',
      due: '',
      description: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/task_data/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          due: res.data.due,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTaskTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeTaskDue(e) {
    this.setState({ due: e.target.value })
  }

  onChangeTaskDescription(e) {
    this.setState({ description: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const taskObject = {
      title: this.state.title,
      due: this.state.due,
      description: this.state.description
    };

    
    axios.put('http://localhost:8000/api/update_data/' + this.props.match.params.id, taskObject)
      .then((res) => {
        console.log(res.data)
        console.log('Task successfully updated')
      }).catch((error) => {
        console.log(error)
      })
      

      console.log(this.state)
        // fetch('http://127.0.0.1:8000/api/update_data/' + this.props.match.params.id, {
        // method: 'PUT',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //   taskObject
        // })
        // }).then((response) => response.json())
        //     .then((responseJson) => {
        //       // Showing response message coming from server updating records.
        //       // Alert.alert(responseJson);
        //     }).catch((error) => {
        //       console.error(error);
        //     });

    // Redirect to Task List 
    this.props.history.push('/task-listing')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeTaskTitle} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeTaskDescription} />
        </Form.Group>

        <Form.Group controlId="Due">
          <Form.Label>Due</Form.Label>
          <Form.Control type="date" value={this.state.due} onChange={this.onChangeTaskDue} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Task
        </Button>
      </Form>
    </div>);
  }
}