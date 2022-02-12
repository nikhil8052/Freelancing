import React from 'react';
import './design.css'


function Dashboard() {
    return (
        <>
            <div class="dashboard ">
                <div class="dashboard_main">
                    <ul>
                        <li><i className="	fa fa-book"></i>Dashboard</li>
                        <li><i className="fa fa-flash"></i>Orbit Pad </li>
                        <li><i className="	fa fa-gears"></i>Orbit analysis</li>
                        <li><i className="fa fa-line-chart"></i>Orbit exchange</li>
                        <li><i className="	fa fa-newspaper-o"></i>Orbit fund</li>
                    </ul>
                </div>
                <div id="dashboardDisconnectBTN">
                    <div className='alldiscont1'>
                        <div className='discont1'>Available balance</div>
                        <div className='discont2'>62,816 M31($58,152) </div>
                        <div className='discont3'><button id="disBTN"> Disconnect </button></div>

                    </div>

                </div>
            </div>

        </>
    )
}


export default Dashboard;