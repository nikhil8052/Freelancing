import React from 'react';



function AllTiers(props) {

    return (
        <>
            <div class="thirdMainContainer">
                <div class="thirdContainerForTierHeading"><small>Available Investment Tier</small></div>
                <div class="thirdContainerForTierData">
                    {
                        props.all.map((val) => {
                            return (
                                <>

                                    <div class="individualTier">
                                        <div class="tierName"> <span> {val.tierName} </span></div>
                                        <div class="tierRequires">{val.requires } </div>
                                        <div class="tierUpto">{val.upto }</div>
                                        <div class="tierReturn">{val.returnOn }</div>
                                    </div>
                                </>
                            )

                        })
                    }



                </div>
            </div>
        </>
    )
}


export default AllTiers;