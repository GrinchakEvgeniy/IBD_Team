import React, {useState, useEffect} from 'react';
import {getProtocols, deleteProtocol} from "../functions";
import { Link } from 'react-router-dom';

const Table = () => {
    const [protocols, setProtocols] = useState([]);

    const GetProtocols = () => {
        getProtocols()
            .then(data=>{
                setProtocols(data);
            })
    }

    useEffect(()=>{
        GetProtocols();
    }, []);

    const Delete = (delete_id) => {
        deleteProtocol({delete_id:delete_id})
            .then(data=>{
                GetProtocols();
            })
    }

    return (
        <div id="datatables-clients_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="datatables-clients_length"><label>Show <select
                            name="datatables-clients_length" aria-controls="datatables-clients"
                            className="custom-select custom-select-sm form-control form-control-sm">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select> entries</label></div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div id="datatables-clients_filter" className="dataTables_filter"><label>Search:<input
                            type="search" className="form-control form-control-sm" placeholder=""
                            aria-controls="datatables-clients"/></label></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table id="datatables-clients" className="table table-striped dataTable no-footer dtr-inline"
                               style={{width: '100%'}} role="grid" aria-describedby="datatables-clients_info">
                            <thead>
                            <tr role="row">
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Actions</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Patient</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                protocols.map((data, index)=>{
                                    if(index%2 == 0){
                                        return <tr role="row" key={index} className="odd">
                                            <td className="dtr-control">
                                                <p>{data.id}</p>
                                                <button className="btn btn-danger" onClick={()=>{
                                                    Delete(data.id);
                                                }}>Delete</button>
                                                <button className="btn btn-warning" onClick={()=>{
                                                    window.location.href = 'protocols/update/'+data.id;
                                                }}>Update</button>
                                                <button className="btn btn-success" onClick={()=>{
                                                    window.location.href = 'protocols/print/'+data.id;
                                                }}>Print</button>
                                            </td>
                                            <td className="sorting_1">{data.patient}</td>
                                            <td className="sorting_1">{data.date_of_examination}</td>
                                        </tr>
                                    } else {
                                        return <tr role="row" key={index} className="even">
                                            <td className="dtr-control">
                                                <p>{data.id}</p>
                                                <button className="btn btn-danger" onClick={()=>{
                                                    Delete(data.id);
                                                }}>Delete</button>
                                                <button className="btn btn-warning" onClick={()=>{
                                                    window.location.href = 'protocols/update/'+data.id;
                                                }}>Update</button>
                                                <button className="btn btn-success" onClick={()=>{
                                                    window.location.href = 'protocols/print/'+data.id;
                                                }}>Print</button>
                                            </td>
                                            <td className="sorting_1">{data.patient}</td>
                                            <td className="sorting_1">{data.date_of_examination}</td>
                                        </tr>
                                    }
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <div className="dataTables_info" id="datatables-clients_info" role="status"
                             aria-live="polite">Showing 1 to 10 of 20 entries
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="datatables-clients_paginate">
                            <ul className="pagination">
                                <li className="paginate_button page-item previous disabled"
                                    id="datatables-clients_previous"><a href="#" aria-controls="datatables-clients"
                                                                        data-dt-idx="0" tabIndex="0"
                                                                        className="page-link">Previous</a></li>
                                <li className="paginate_button page-item active"><a href="#"
                                                                                    aria-controls="datatables-clients"
                                                                                    data-dt-idx="1" tabIndex="0"
                                                                                    className="page-link">1</a></li>
                                <li className="paginate_button page-item "><a href="#"
                                                                              aria-controls="datatables-clients"
                                                                              data-dt-idx="2" tabIndex="0"
                                                                              className="page-link">2</a></li>
                                <li className="paginate_button page-item next" id="datatables-clients_next"><a href="#"
                                                                                                               aria-controls="datatables-clients"
                                                                                                               data-dt-idx="3"
                                                                                                               tabIndex="0"
                                                                                                               className="page-link">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Table;