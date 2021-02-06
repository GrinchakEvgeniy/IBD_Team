import React from 'react';
import { Link  } from 'react-router-dom'

const ToolsPanel = () => {
    return (
        <div className="tools protocols_tools">
            <Link to='protocols/new' className="add btn btn-primary">Add new</Link>
        </div>
    );
};

export default ToolsPanel;