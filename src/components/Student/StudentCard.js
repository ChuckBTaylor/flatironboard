import React, { Component } from 'react'


class StudentCard extends Component {

  handleClick = (event) => {

    this.props.handleRemove(this.props.student)
    /// to tell my parent about it
    // how can i get the students name
  }
  render() {
    return (
      <li>{this.props.student.name}</li>
    )
  }

  componentWillUnmount() {
    console.log("Unmounting")
  }
}

export default StudentCard
