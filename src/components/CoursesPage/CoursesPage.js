import React from "react";
import {connect} from 'react-redux'

import * as courseActions from '../../redux/action/CreateCourse'
import CourseList from './CourseList'
import {bindActionCreators} from 'redux'
class CoursesPage extends React.Component {
  // state = {
  //   course: {
  //     titile: "",
  //   },
  // };

  // handleChange = (e) => {
  //   const course = { ...this.state.course, title: e.target.value };
  //   this.setState({ course });
  // };
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.actions.createCourse(this.state.course);
  //   // event.target.reset(); // reset input 
  // };
  componentDidMount(){
    this.props.actions.loadCourses().catch(error=> {
      alert("there is no data " + error )
    })
  }

  render() {
    return (
      <React.Fragment>  
            {/* <form onSubmit={this.handleSubmit}> */}
        <h2> Courses</h2>
        {/* <p> Add Courses</p>
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
      </form>   */}
       <CourseList courses={this.props.courses}/>
       {/* {this.props.courses.map(c=>(
         <div key={c.title}>{c.title}</div>
       ))} */}
       </React.Fragment>
    );
  }
}
  
 function mapStateToProps(state){
   return{
     courses: state.courses
   };
 }
 function mapDispatchToProps(dispatch){
   return{
     actions: bindActionCreators(courseActions,dispatch)
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
