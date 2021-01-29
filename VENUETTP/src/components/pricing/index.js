import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[429,504,999],
        positions:['General Admission','General Admission + Shuttle','VIP'],
        desc:[
            'Allows entrance to the Venue and Day Parking lots all three days. GA Pass holders may visit the GA camping areas.',
            'Allows entrance to the Venue and Day Parking lots for all three days. GA Pass holders may visit the GA Camping areas. Includes Any Line Shuttle Pass.',
            'Allows access into the venue, day parking lots (Preferred Parking sold separately) and the venue VIP areas. May visit Car & Tent Camping areas.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;