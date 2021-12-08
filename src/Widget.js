import React from 'react';
import "./css/widget.css";
import InfoIcon from '@material-ui/icons/Info';


function Widget() {
    return (
        <div className="widget">
            <div className="widget_top">
                <div className="widget__header">
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__option">
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6d ago * 2,89 readers</p>
                        </li>

                        <li>
                            <h4>A Two Pizza rule for eating</h4>
                            <p>4d ago * 7,69 readers</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Widget
