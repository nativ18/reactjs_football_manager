import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header_title">
        <div className="centered_container">
            <h1>My League</h1>
            <div className="header">
                <NavLink className="header_links" to="/" activeClassName="is-active" exact={true}>My Team</NavLink>
                <NavLink className="header_links" to="/create" activeClassName="is-active">Create Player</NavLink>
                <NavLink className="header_links" to="/all_players" activeClassName="is-active">View All Player</NavLink>
            </div>
        </div>
    </header>
);

export default Header;
