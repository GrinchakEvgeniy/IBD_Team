import React, {useState} from 'react';
import {Link} from "react-router-dom";
import RichTextEditor from 'react-rte';
import Dropzone from 'react-dropzone'
import {uploadProtocol, uploadProtocolImages} from "./functions";

const NewProtocol = () => {
    const [images, setImages] = useState([]);
    const [patient, setPatient] = useState('')
    const [date, setDate] = useState('')
    const [val1, setVal1] = useState(RichTextEditor.createEmptyValue());
    const [val2, setVal2] = useState(RichTextEditor.createEmptyValue());
    const [val3, setVal3] = useState(RichTextEditor.createEmptyValue());





    const Save = () => {
        const data_in = {
            patient: patient,
            date_of_examination: date,
            tech_param_survey: val1.toString('html'),
            protocol: val2.toString('html'),
            conclusion: val3.toString('html'),
            protocol_image: []
        }
        uploadProtocol(data_in)
            .then((data)=>{
                let formData = new FormData();
                if(images.length == 0){document.location.href = '/protocols';return true;}
                images.map((value, index)=>{
                    formData.append("file"+index, value, value.name);
                })
                formData.append("protocol_id", data.id);
                uploadProtocolImages(formData)
                    .then(data=>{
                        document.location.href = '/protocols';
                    })
            })
    }

    return (
        <div className="new_protocol_wrap container">
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
                    <Dropzone onDrop={acceptedFiles =>setImages(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop some images here, or click to select images</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
            </div>
        </div>
    );
};

export default NewProtocol;