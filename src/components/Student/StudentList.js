import React, { Component } from 'react'
import StudentCard from './StudentCard'

class StudentList extends Component {


  render() {
    console.log("Student List rendering")
    // this.props.students
    const studentItems = this.props.students.map((student, index) => <StudentCard key={index} student={student} handleRemove={this.props.onRemove}/>)
    return (
      <div>
        <ul>
          {studentItems}
        </ul>
      </div>
    )
  }
}

/*
const AltStudentList = (props) => {
  const studentItems = props.students.map((student) => <li>{student}</li>)
  return (
    <div>
      <ul>
        {studentItems}
      </ul>
    </div>
  )
}

*/

export default StudentList
