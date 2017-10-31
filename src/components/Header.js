import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>My League</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>My Team</NavLink><text>   </text>
        <NavLink to="/create" activeClassName="is-active">Create Player</NavLink><text>   </text>
        <NavLink to="/all_players" activeClassName="is-active">View All Player</NavLink>

    </header>
);

export default Header;
