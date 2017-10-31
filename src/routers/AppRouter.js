import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import MainPageComponent from '../components/MainPage';
import AddExpensePage from '../components/EditExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/EditExpensePage';
import NotFoundPage from '../components/EditExpensePage';
import Header from '../components/Header';
import {CreatePlayerItem} from "../components/CreatePlayerItem";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={MainPageComponent} exact={true}/>
                <Route path="/login" component={AddExpensePage}/>
                {/*<Route path="/main" component={HelpPage}/>*/}
                <Route path="/create" component={CreatePlayerItem}/>
                {/*<Route component={NotFoundPage}/>*/}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
