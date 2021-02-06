import React from 'react';
import { Link  } from 'react-router-dom'

const ToolsPanel = () => {
    return (
        <div className="tools amam_tools">
            <Link to='amam/new' className="add btn btn-primary">Add new</Link>
        </div>
    );
};

export default ToolsPanel;