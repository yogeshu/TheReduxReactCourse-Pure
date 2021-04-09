import React from "react";
import { connect } from "react-redux";

import * as courseActions from "../../redux/action/CreateCourse";
import * as authorActions from "../../redux/action/createAuthor";

import { bindActionCreators } from "redux";
class TheManageCourse extends React.Component {
  //  const { courses, authors ,actions }  = this.props
  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.actions.loadCourses().catch((error) => {
        alert("there is no data " + error);
      });
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch((error) => {
        alert("there is no data " + error);
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <form onSubmit={this.handleSubmit}> */}
        <h2> Manage Course </h2>
      </React.Fragment>
    );
  }
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
