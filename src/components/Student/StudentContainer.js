import React, { Component } from 'react'
import StudentList from './StudentList'
import StudentForm from './StudentForm'
import { Route } from 'react-router-dom'
import { fetchStudents } from '../../services/students'


class StudentContainer extends Component {


  state = {
    students: [{name: "johann"}]
  }

  componentDidMount() {


  }


  removeStudent = (name) => {
    const newStudents = this.state.students.filter((student) => {
      return student !== name
    })
    this.setState({
      students: newStudents
    })
  }


  addStudent = (name) => {
    this.setState({
      students: [...this.state.students, name]
    })
  }

  render() {

    return (
      <div>
        <StudentForm onAdd={this.addStudent}/>
        <StudentList students={this.state.students}/>
      </div>
    )
  }

}

export default StudentContainer
