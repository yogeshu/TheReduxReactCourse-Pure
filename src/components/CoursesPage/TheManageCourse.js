import React from "react";
import { connect } from "react-redux";

import * as courseActions from "../../redux/action/CreateCourse";
import * as authorActions from "../../redux/action/createAuthor";
import { newCourse } from "../../../tools/mockData";
import CourseForm from "./CourseForm";
import { bindActionCreators } from "redux";
import { saveCourse } from "../../api/courseApi";
function TheManageCourse({ courses, actions, authors, saveCourses, ...props }) {
  const [course, setCourse] = React.useState({ ...props.course });
  const [errors, setErrors] = React.useState({});
  React.useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("there is no data " + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("there is no data " + error);
      });
    }
  });

  const hanldeChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveCourse(course);
  };

  return (
    <React.Fragment>
      {/* <form onSubmit={this.handleSubmit}> */}

      <CourseForm
        onChange={hanldeChange}
        errors={errors}
        authors={authors}
        course={course}
        onSave={handleSave}
      />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      saveCourses: bindActionCreators(courseActions.saveCourses, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TheManageCourse);
