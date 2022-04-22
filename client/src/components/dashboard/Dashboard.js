
import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import img from '../../assets/assessment2.png';
import img2 from '../../assets/report.png';
// import BarChart from './BarChart';
import { Bar } from 'react-chartjs-2'


const Dashboard = ({ auth: { user } }) => {
  return (
    // <div className='container'>
    <div style={{height:"100vh", width:"100%", backgroundColor:"#F0F2F5"}}>

      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1 style={{marginTop:"7%", color:"#1877f2"}}>Dashboard</h1>
        <div>
          <i className="fas fa-user" /> Welcome {user?.name}
        </div>
      </div>

      <div style={{marginTop:"3%", display:"flex", justifyContent:"space-around"}} >
        <div style={{ height:"40vh", width:"40vw", borderRadius:"25px", border:"5px solid #1877F2"}}>
          <div style={{display:"flex", justifyContent:"center", marginTop:"2%"}}>
            <h1 style={{color:"#1877f2"}}>Menu</h1>
          </div>
          <div style={{display:"flex", justifyContent:"space-around", marginTop:"2%"}}>
            <Link to="/assessmentresults" style={{display:"flex", float:"left", flexDirection:"column"}}>
              <img src={img} height="120vh" width="100vw" alt='' />
              {/* <input type="submit"
              style={{height:"15%", backgroundColor:"#1877f2", color:"white", borderRadius:"25px", borderColor:"#1877f2", marginTop:"3vh"}}
              value="Completed Assessments" /> */}
              <Button color="primary" style={{borderRadius:"25px", marginTop:"3vh"}}>Completed Assessments</Button>
            </Link>

            <Link to="/assessmentresults" style={{display:"flex", float:"left", flexDirection:"column"}}>
              <img src={img2} height="120vh" width="100vw" alt='' />
              {/* <input type="submit"
              style={{height:"15%", backgroundColor:"#1877f2", color:"white", borderRadius:"25px", borderColor:"#1877f2", marginTop:"3vh"}}
              value=" Get Assessment Report " /> */}
              <Button color="primary" style={{borderRadius:"25px", marginTop:"3vh"}}>Get Assessment Report</Button>
            </Link>
          </div>
        </div>

        <div style={{ height:"50vh", width:"50vw", borderRadius:"25px", border:"5px solid #1877F2", display:"flex", flexDirection:"column", alignItems:"center"}}>
          <h1 style={{color:"#1877f2", marginTop:"3%", marginBottom:"5%"}}>Your Completed Assessments</h1>
          {/* <BarChart /> */}
          <Bar
            data={{
              labels: ['Vulnerability Scans', 'Dns', 'Ssl'],
              datasets: [
                {
                  label: '# of assessments',
                  data: [5, 2, 3],
                  backgroundColor: [
                    "purple", "green", "blue"
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                  ],
                  borderWidth: 1,
                },
                // {
                //   label: 'Quantity',
                //   data: [47, 52, 67, 58, 9, 50],
                //   backgroundColor: 'orange',
                //   borderColor: 'red',
                // },
              ],
            }}
            height={1000}
            width={1500}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }} 
          />
        </div>
      </div>
      
    </div> 
    // </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
