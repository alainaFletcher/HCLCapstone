import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { CreateProjectBtn } from "./Layout/DashboardElements";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import FillImg from "../images/tree.png"; 

class Dashboard extends Component {

  
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;

    return (
      <div className="projects">
      <div className="col-xs-7 left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">To Do</h1>
              <br />
              <CreateProjectBtn to="/addProject">
                  Create Project
                </CreateProjectBtn>

              <br />
              <hr />
              {projects.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
        </div>
        <div className="col-xs-5 right">
          <img src={FillImg} alt="bonsai" id="not"/>
        </div>
      </div>
      
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);