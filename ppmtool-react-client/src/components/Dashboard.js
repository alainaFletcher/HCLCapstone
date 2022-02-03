import React,{useEffect,useState} from 'react'
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { CreateProjectBtn } from "./Layout/DashboardElements";
import { connect } from "react-redux";
import { getProjects , sumProjectTasks, sumProjects} from "../actions/projectActions";
import PropTypes from "prop-types";
import FillImg from "../images/tree.png"; 



const Dashboard = ({ project,getProjects,sumProjectTasks,sumProjects}) => {

    const [tasksSum,setTaskSum] = useState(0)
    const [projectSum,setProjectSum] = useState(0)

    /// Empty Array Means it will only run once at mounting
    // == componentWillMount
    useEffect(() => {
        getProjects();
       
        },[])

        useEffect(() => {
            const fetchData = async () => {
                const data = await sumProjectTasks();
                setTaskSum(data)

                const sum = await sumProjects();
                setProjectSum(sum)
            }
    
            fetchData();           
            },[])
    
    

      


        const {projects} = project;


    return (
      <div className="projects">
      <div className="col-xs-6 left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">To Do</h1>
              <br />
              <p>
              <CreateProjectBtn to="/addProject">
                  Create Project
                </CreateProjectBtn> 
                <div class="stat"> Total Tasks: {tasksSum}
                </div>
      <div class="stat"> Total Projects: {projectSum}
                </div>
                </p>

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