import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProjects } from "../actions/projectActions";
import HomeImg from "../images/home.png"; 

class Home extends Component {

  
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 class="also">Welcome to your Project Management Tool.</h1>
              <br />
              <img src={HomeImg} alt="plants" id="main-img"/>;
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  project: state.project
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Home);