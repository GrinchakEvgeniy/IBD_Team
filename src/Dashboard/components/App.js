import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Protocols from "./Protocols";
import Amam from "./Amam";
import NewAmam from "./NewAmam";
import NewProtocol from "./NewProtocol";
import PrintProtocol from "./PrintProtocol";
import UpdateProtocol from "./UpdateProtocol";

class App extends Component {
    render() {
        return (
            <div className="main">
                <Sidebar/>
                <Switch>
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/protocols' component={Protocols}/>
                    <Route exact path='/amam' component={Amam}/>
                    <Route exact path='/amam/new' component={NewAmam}/>
                    <Route exact path='/protocols/new' component={NewProtocol}/>
                    <Route exact path='/protocols/print/:id' component={PrintProtocol}/>
                    <Route exact path='/protocols/update/:id' component={UpdateProtocol}/>
                </Switch>
            </div>
        );
    }
}

export default App;