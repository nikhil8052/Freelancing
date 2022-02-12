import React from 'react';
import Dashboard from './Dashboard';
import ContentPart from './ContentPart';
import './design.css';


function Content() {
    
    return (
        <>
            <div className='headerMainContainer'>
                <div id='allcontent'>
                    <Dashboard /> 
                    <ContentPart/>
                </div>
            </div>
        </>
    )
}


export default Content;