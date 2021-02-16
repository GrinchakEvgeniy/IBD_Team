import React from 'react';
import Subject from "./Subfields/Subject";
import Visit from "./Subfields/Visit";
import Airwaybill from "./Subfields/Airwaybill";
import SampleTypeFirst from "./Subfields/SampleTypeFirst";
import SampleTypeSecond from "./Subfields/SampleTypeSecond";
import OfTubes from "./Subfields/OfTubes";

const Subfields = () => {
    return (
        <div className="subfields container">
            <div className="subfields_wrap">
                <Subject/>

                <Visit/>

                <Airwaybill/>

                <SampleTypeFirst/>

                <SampleTypeSecond/>

                <OfTubes/>
            </div>
        </div>
    );
};

export default Subfields;