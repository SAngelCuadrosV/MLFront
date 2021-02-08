import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";
import HeaderSearch from "../components/Commons/headerSearch"
import ListItems from "../components/ListOfItems"
import ItemDetailed from "../components/ItemPage"
import history from "../utils/history"


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        document.title = "MercadoLibre";
    }

    render() {
        return (
            <>
                <HeaderSearch />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/items" component={ListItems} />
                        <Route exact path="/items/:id" component={ItemDetailed} />
                    </Switch>
                </Router>
                <br/>
            </>
        );
    }
}

export default Home;
