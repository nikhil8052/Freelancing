import React from 'react';
import AllTiers from './AllTiers';
import OrbitFunds from './OrbitFunds';
import Rough from './Rough';



function ContentPart() {

    let allTiers=[{tierName:'Tier 1 ',requires:" Requires 2500 M31 ",upto:"Upto 7% Monthly ",returnOn:'Return On Investment'}]
    let allFunds=[{name:'Current Investment',price:'$13224',img:"/icons/currency.png"},{name:'Current Investment',price:'$13224',img:"/icons/calender.png"}]
    return (
        <>
            <div className='contentPartMain'>
                <div class="contentPartNav">
                    <div>
                        <div class="leftText">
                            <h5> Orbit Fund </h5>
                        </div>
                        <div class="topBTN">
                            <button class="btn btnPrimary leftText">  buy from us $21</button>
                        </div>
                    </div>
                </div>
                <div className='fundsAndTiers'>
                    <OrbitFunds all={allFunds} />
                    <AllTiers all={allTiers}/>
                </div>
            </div>



        </>
    )
}


export default ContentPart;