import React, {useState, useEffect} from 'react';
import {getAmamFetch} from "../functions";

const Table = () => {
    const [amam, setAmam] = useState([]);

    const getAmam = () => {
        getAmamFetch()
            .then((data)=>{
                setAmam(data)
            })
    }

    useEffect(()=>{
        getAmam();
    }, []);

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
                                    colSpan="1"  >Action</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Subject</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Date</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Visit</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Sample type</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Sample type</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  ># of tubes</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Result</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Accession#</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Shipping date</th>
                                <th className="sorting" tabIndex="0" aria-controls="datatables-clients" rowSpan="1"
                                    colSpan="1"  >Airwaybill#</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                amam.map((value, index)=>{
                                    if(index%2 == 0){
                                        return <tr role="row" className="odd">
                                            <td className="dtr-control">
                                                <p>{value.id}</p>
                                                <button className="btn btn-danger">Delete</button>
                                                <button className="btn btn-warning">Update</button>
                                            </td>
                                            <td>{value.subject}</td>
                                            <td className="sorting_1">{value.date}</td>
                                            <td>{value.visit}</td>
                                            <td>{value.sample_type_first}</td>
                                            <td>{value.sample_type_second}</td>
                                            <td>{value.of_tubes}</td>
                                            <td>{value.result}</td>
                                            <td>{value.accession}</td>
                                            <td>{value.shipping_date}</td>
                                            <td>{value.airwaybill}</td>
                                        </tr>
                                    } else {
                                        return <tr role="row" className="even">
                                            <td className="dtr-control">
                                                <p>{value.id}</p>
                                                <button className="btn btn-danger">Delete</button>
                                                <button className="btn btn-warning">Update</button>
                                            </td>
                                            <td>{value.subject}</td>
                                            <td className="sorting_1">{value.date}</td>
                                            <td>{value.visit}</td>
                                            <td>{value.sample_type_first}</td>
                                            <td>{value.sample_type_second}</td>
                                            <td>{value.of_tubes}</td>
                                            <td>{value.result}</td>
                                            <td>{value.accession}</td>
                                            <td>{value.shipping_date}</td>
                                            <td>{value.airwaybill}</td>
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