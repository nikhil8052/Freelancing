import React from 'react';


function OrbitFunds(props) {
    return (
        <>
            <div className='orbitFundsMainContainer'>
                {/* <!-- FIRST CONTAINER  --> */}
                <div class="twoDivs1">
                    
                    {
                        props.all.map((val) => {
                            return (
                                <>
                                    <div class="twoDivs1Content">
                                        <div>
                                            <div class="twoDiv1ContentHeading"><span id='twoDivs2FirstPartBlueText'><img src={val.img}  className="twoDiv1ContentHeadingIcon" />{val.name} </span></div>
                                            <div class="twoDiv1ContentHeadingPrice">{val.price}</div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

                {/* <!-- SECOND CONTAINER  --> */}
                <div class="twoDivs2">
                    <div class="twoDivs2FirstPart">
                        <h6>*Deposite window closing in <span id="twoDivs2FirstPartBlueText"> 2 days 12 hours 27 mminutes </span> (April 12 at 12 PM ) </h6>
                    </div>
                    <div class="twoDivs2SecondPart">
                        <small style={{fontSize:'13px'}}>
                            Prior month total invetest :<span id="twoDivs2FirstPartBlueText">$190.454</span>
                        </small>
                        <br/>
                        <small style={{fontSize:'12px'}}>
                            Prior month profit returned to investor:<span id="twoDivs2FirstPartBlueText">$190.454</span>
                        </small>
                    </div>
                </div>
            </div>
        </>

    )
}


export default OrbitFunds;