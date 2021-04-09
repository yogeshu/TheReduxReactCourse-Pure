import React from "react";
import { connect } from "react-redux";

import * as courseActions from "../../redux/action/CreateCourse";
import * as authorActions from "../../redux/action/createAuthor";

import { bindActionCreators } from "redux";
function TheManageCourse ( { courses,actions,authors}) {
  React.useEffect(()=>{

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
  })

  

  
    return (
      <React.Fragment>
        {/* <form onSubmit={this.handleSubmit}> */}
        <h2> Manage Course </h2>
      </React.Fragment>
    );
  }


function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TheManageCourse);
