import React, {useState, useEffect} from 'react';
import { Link  } from 'react-router-dom'
import {createAmamFetch} from "./functions";

const NewAmam = () => {
    const [sendData, setSendData] = useState({
        subject: "",
        date: "",
        visit: "",
        sample_type_first: "",
        sample_type_second: "",
        of_tubes: "",
        result: "",
        accession: "",
        shipping_date: "",
        airwaybill: "",
        comments: "",
        date_order: "",
        number_order: "",
        date_getting: ""
    });

    const Save = () => {
        createAmamFetch(sendData)
            .then(data=>{
                document.location.href = "/amam";
            })
    }


    return (
        <div className="new_amam_wrap container">
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3>Create new notice</h3>
                </div>
                <div className="col-auto ml-auto text-right mt-n1">
                    <button type="button" className="btn btn-success" onClick={Save}>Save</button>
                    <Link to="/amam" className="btn btn-warning" onClick={()=>{
                        document.location.href = "/amam";
                    }}>Cancel</Link>
                </div>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Subject</span>
                <input type="number" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, subject: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                onChange={(event)=>{
                            setSendData({...sendData, date: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Visit</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, visit: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Sample type</span>
                <input type="text" aria-label="First name" className="form-control"
                    onChange={(event)=>{
                            setSendData({...sendData, sample_type_first: event.target.value})
                        }}
                />
                <input type="text" aria-label="Last name" className="form-control"
                    onChange={(event)=>{
                            setSendData({...sendData, sample_type_second: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default"># of tubes</span>
                <input type="number" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, of_tubes: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Result</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, result: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Accession#</span>
                <input type="number" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, accession: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Shipping date</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, shipping_date: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Airwaybill#</span>
                <input type="number" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, airwaybill: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Date order</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, date_order: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Number order</span>
                <input type="number" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, number_order: event.target.value})
                        }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Date getting</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        onChange={(event)=>{
                            setSendData({...sendData, date_getting: event.target.value})
                        }}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1">Comments</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    onChange={(event)=>{
                            setSendData({...sendData, comments: event.target.value})
                        }}

                ></textarea>
            </div>
            </div>
        </div>
    );
};

export default NewAmam;