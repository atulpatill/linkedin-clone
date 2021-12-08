import React from 'react';
import "./css/widget.css";
import InfoIcon from '@material-ui/icons/Info';


function Widget() {
    return (
        <>
        <div className="widget">
            <div className="widget_top">
                <div className="widget__header">
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6d ago * 2,89 readers</p>
                        </li>

                        <li>
                            <h4>A Two Pizza rule for eating</h4>
                            <p>4d ago * 7,69 readers</p>
                        </li>
                        <li>
                            <h4>How to Handle a workplace breakup</h4>
                            <p>3d ago * 5,97 readers</p>
                        </li>
                        <li>
                            <h4>Flexi leave is the new flexi</h4>
                            <p>2d ago * 4,02 readers</p>
                        </li>
                        <li>
                            <h4>A Two Pizza rule for eating</h4>
                            <p>4d ago * 2,36 readers</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="widget_bottom">
                <div className="widget__header">
                    <h4>Toaday's Top Courses</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Leading with healthy heal</h4>
                            <p>Gary vee</p>
                        </li>

                        <li>
                            <h4>Clever mindset by Naval Ravikant</h4>
                            <p>Naval Ravikant</p>
                        </li>
                        <li>
                            <h4>Ankur Wariko's time management</h4>
                            <p>Ankur Wariko</p>
                        </li>
                        <li>
                            <h4>Karmyoga explained in bhagvat geeta</h4>
                            <p>Bhagvat Geeta</p>
                        </li>
                        <li>
                            <h4>Shorter hour boost productivity</h4>
                            <p>Varun Mayya</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Widget
