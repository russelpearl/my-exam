import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TaskTableRow from './TaskTableRow';


export default class TaskList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      task: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/task_data/')
      .then(res => {
        this.setState({
          task: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.task.map((res, i) => {
      return <TaskTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Due</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}