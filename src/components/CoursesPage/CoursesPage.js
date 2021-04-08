import React from "react";
import {connect} from 'react-redux'

import createCourse from '../../redux/action/CreateCourse'
class CoursesPage extends React.Component {
  state = {
    course: {
      titile: "",
    },
  };

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(createCourse(this.state.course))
    // alert("This Course Added You can try loading this in account");
  };

  render() {
    return (
      <React.Fragment>  
            <form onSubmit={this.handleSubmit}>
        <h2> Courses</h2>
        <p> Add Courses</p>
        <input
          type="text"
          className="input-control"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button classNam="btn btn-dark" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>  
       {this.props.courses.map(c=>(
         <div key={c.title}>{c.title}</div>
       ))}
       </React.Fragment>
    );
  }
}
  
 function mapStateToProps(state){
   return{
     courses: state.courses
   };
 }

export default connect(mapStateToProps)(CoursesPage);
