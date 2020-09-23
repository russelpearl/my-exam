import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class TaskTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask() {
        axios.delete('http://localhost:8000/api/task_data/' + this.props.obj.id)
            .then((res) => {
                console.log('Task deleted!')
                Swal.fire(
                    'Task Deleted',
                    'success'
                  )
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.description}</td>
                <td>{this.props.obj.due}</td>
                <td>
                    <Link className="edit-link" to={"/edit-task/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={this.deleteTask} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}