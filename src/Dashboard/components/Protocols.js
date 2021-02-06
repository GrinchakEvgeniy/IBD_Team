import React from 'react';
import ToolsPanel from "./Protocols/ToolsPanel";
import Table from "./Protocols/Table";

const Protocols = () => {
    return (
        <div className="protocols_wrap container">
            <ToolsPanel/>
            <Table/>
        </div>
    );
};

export default Protocols;