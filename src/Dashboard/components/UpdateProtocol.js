import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import RichTextEditor from "react-rte";
import Dropzone from 'react-dropzone'
import {uploadProtocol, uploadProtocolImages, getProtocols, updateProtocol, deleteProtocolImages} from "./functions";

const UpdateProtocol = () => {
    const [protocolId, setProtocolId] = useState();
    const [images, setImages] = useState([]);
    const [mapImages, setMapImages] = useState([]);
    const [nowImgId, setNowImgId] = useState([]);
    const [patient, setPatient] = useState('')
    const [date, setDate] = useState('')
    const [val1, setVal1] = useState(RichTextEditor.createEmptyValue());
    const [val2, setVal2] = useState(RichTextEditor.createEmptyValue());
    const [val3, setVal3] = useState(RichTextEditor.createEmptyValue());

    useEffect(()=>{
        const url = new URL(window.location.href);
        const arr = url.pathname.split("/");
        setProtocolId(arr[arr.length - 1]);
        getProtocols(arr[arr.length - 1])
            .then(data=>{
                setPatient(data[0].patient);
                setDate(data[0].date_of_examination);
                setVal1(RichTextEditor.createValueFromString(data[0].tech_param_survey, 'html'))
                setVal2(RichTextEditor.createValueFromString(data[0].protocol, 'html'))
                setVal3(RichTextEditor.createValueFromString(data[0].conclusion, 'html'))
                const img = [];
                const img_ids = [];
                for(let i = 0; i < data[0].protocol_image.length; i++){
                    img.push(data[0].protocol_image[i].image)
                    img_ids.push(data[0].protocol_image[i].id)
                }
                setMapImages(img);
                setNowImgId(img_ids);
            })
    }, [])


    const Save = () => {
        const data_in = {
            id: protocolId,
            patient: patient,
            date_of_examination: date,
            tech_param_survey: val1.toString('html'),
            protocol: val2.toString('html'),
            conclusion: val3.toString('html'),
        }
        updateProtocol(data_in)
            .then((data)=>{
                let formData = new FormData();
                if(images.length == 0){document.location.href = '/protocols';return true;}
                images.map((value, index)=>{
                    formData.append("file"+index, value, value.name);
                })
                formData.append("protocol_id", protocolId);
                uploadProtocolImages(formData)
                    .then(data=>{
                        document.location.href = '/protocols';
                    })
                deleteProtocolImages({ids:nowImgId})
            })
    }

    return (
        <div className="update_protocols_wrap container">
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3>Update protocol</h3>
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
                <div className="text_field mb-3">
                    <div className="row"><p>ТЕХНІЧНІ ПАРАМЕТРИ ОБСТЕЖЕННЯ</p></div>
                    <RichTextEditor
                        value={val1}
                        onChange={(val)=>{
                            setVal1(val)
                        }}
                    />
                </div>
                <div className="text_field mb-3">
                    <div className="row"><p>ПРОТОКОЛ</p></div>
                    <RichTextEditor
                        value={val2}
                        onChange={(val)=>{
                            setVal2(val)
                        }}
                    />
                </div>
                <div className="text_field mb-3">
                    <div className="row"><p>ЗАКЛЮЧЕННЯ</p></div>
                    <RichTextEditor
                        value={val3}
                        onChange={(val)=>{
                            setVal3(val)
                        }}
                    />
                </div>
                <div className="images_update">
                    {
                        mapImages.map((value, index)=>{
                            return <div key={index}><img src={value} alt=""/></div>
                        })
                    }
                </div>
                <div className="file_drop row">
                    <Dropzone onDrop={acceptedFiles => setImages(acceptedFiles)}>
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

export default UpdateProtocol;