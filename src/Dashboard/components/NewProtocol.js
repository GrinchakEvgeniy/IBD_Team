import React, {useState} from 'react';
import {Link} from "react-router-dom";
import RichTextEditor from 'react-rte';
import {uploadProtocol, uploadProtocolImages} from "./functions";

const NewProtocol = () => {
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [patient, setPatient] = useState('')
    const [date, setDate] = useState('')
    const [val1, setVal1] = useState(RichTextEditor.createEmptyValue());
    const [val2, setVal2] = useState(RichTextEditor.createEmptyValue());
    const [val3, setVal3] = useState(RichTextEditor.createEmptyValue());





    const Save = () => {
        const data = {
            patient: patient,
            date_of_examination: date,
            tech_param_survey: val1.toString('html'),
            protocol: val2.toString('html'),
            conclusion: val3.toString('html'),
            protocol_image: []
        }
        uploadProtocol(data)
            .then((data)=>{
                let formData = new FormData();
                formData.append("file1", image1, image1.name);
                formData.append("file2", image2, image2.name);
                formData.append("protocol_id", data.id);
                uploadProtocolImages(formData)
            })
    }

    return (
        <div className="new_amam_wrap container">
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3>Create new protocol</h3>
                </div>
                <div className="col-auto ml-auto text-right mt-n1">
                    <button type="button" onClick={Save} className="btn btn-success">Save</button>
                    <Link to="/protocols" className="btn btn-warning">Cancel</Link>
                </div>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Patient</span>
                    <input type="text" value={patient}
                            onChange={(event)=>{
                                setPatient(event.target.value)
                            }}
                           className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                    <input type="text" value={date}
                           onChange={(event)=>{
                               setDate(event.target.value)
                           }}
                           className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <div className="row"><p>ТЕХНІЧНІ ПАРАМЕТРИ ОБСТЕЖЕННЯ</p></div>
                    <RichTextEditor
                        value={val1}
                        onChange={(val)=>{
                            setVal1(val)
                        }}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="row"><p>ПРОТОКОЛ</p></div>
                    <RichTextEditor
                        value={val2}
                        onChange={(val)=>{
                            setVal2(val)
                        }}
                    />
                </div>
                <div className="input-group mb-3">
                    <div className="row"><p>ЗАКЛЮЧЕННЯ</p></div>
                    <RichTextEditor
                        value={val3}
                        onChange={(val)=>{
                            setVal3(val)
                        }}
                    />
                </div>
                <div className="input-group row">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file"
                           onChange={(event => {setImage1(event.target.files[0])})}
                           id="exampleFormControlFile1"/>
                </div>
                <div className="input-group row">
                    <label htmlFor="exampleFormControlFile2">Example file input</label>
                    <input type="file" className="form-control-file"
                           onChange={(event => {setImage2(event.target.files[0])})}
                           id="exampleFormControlFile2"/>
                </div>
            </div>
        </div>
    );
};

export default NewProtocol;