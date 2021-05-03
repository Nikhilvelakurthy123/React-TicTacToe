import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import TictactoeComponent from './TictactoeComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'

export class IndexComponent extends Component {
    render() {
        return (
            <div className="Ticktactoe">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={TictactoeComponent} />
                        {/* <AuthenticiatedRoute path="/logout" component={LogoutComponent} /> */}
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}