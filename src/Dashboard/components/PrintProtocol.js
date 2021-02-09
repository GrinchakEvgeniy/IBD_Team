import React, {useState, useEffect} from 'react';
import {getProtocols} from "./functions";
import parse from 'html-react-parser';

const PrintProtocol = () => {
    const [protocolId, setProtocolId] = useState();
    const [images, setImages] = useState([]);
    const [patient, setPatient] = useState('');
    const [date, setDate] = useState('');
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [val3, setVal3] = useState();

    useEffect(() => {
        document.getElementsByClassName("sidebar_wrap")[0].style.display = 'none';
        const url = new URL(window.location.href);
        const arr = url.pathname.split("/");
        setProtocolId(arr[arr.length - 1]);
        getProtocols(arr[arr.length - 1])
            .then(data=>{
                setPatient(data[0].patient);
                setDate(data[0].date_of_examination);
                setVal1(parse(data[0].tech_param_survey));
                setVal2(parse(data[0].protocol));
                setVal3(parse(data[0].conclusion));
                const img = [];
                for(let i = 0; i < data[0].protocol_image.length; i++){
                    img.push(data[0].protocol_image[i].image)
                }
                setImages(img);
            })
    }, [])

    const Print = () => {
        document.getElementsByClassName('btn-success')[0].style.display = "none";
        print();
        document.getElementsByClassName('btn-success')[0].style.display = "block";
    }

    return (
        <div className="container">
            <button className="btn btn-success"
                    onClick={Print}
            >Print</button>
            <div className="printed_wrap">
                <div className="p_log"><div className="img_l"><img src="/static/system/print_logo.png" alt=""/></div></div>
            <div className="title"><h3>ПРОТОКОЛ КОЛОНОСКОПІЇ</h3></div>
            <div className="patient"><p>Пацієнт:</p><p>{patient}</p></div>
            <div className="date"><p>Дата обстеження:</p><p>{date}</p></div>
            <div className="block">
                <div className="block_title">ТЕХНІЧНІ ПАРАМЕТРИ ОБСТЕЖЕННЯ</div>
                <div className="content">{val1}</div>
            </div>
            <div className="block">
                <div className="block_title">ПРОТОКОЛ</div>
                <div className="content">{val2}</div>
            </div>
            <div className="block">
                <div className="block_title">ЗАКЛЮЧЕННЯ</div>
                <div className="content">{val3}</div>
            </div>
            <div className="block last">
                <div className="block_title">ПРИМІТКИ</div>
                <div className="content ">
                    {
                        images.map((value, index)=>{
                            return <div className="img" key={index}><img src={value} alt=""/></div>
                        })
                    }
                </div>
            </div>
            <div className="finish">
                <p>Лікар:</p>
                <div></div>
            </div>
            </div>
        </div>
    );
};

export default PrintProtocol;