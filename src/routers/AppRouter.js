import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPageComponent from '../components/MainPage';
import Header from '../components/Header';
import CreatePlayerPage from "../components/CreatePlayerPage";
import PlayerPage from "../components/PlayerPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={MainPageComponent} exact={true}/>
                <Route path="/player/:id" component={PlayerPage}/>
                <Route path="/create" component={CreatePlayerPage}/>
                <Route path="/edit/:id" component={CreatePlayerPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
