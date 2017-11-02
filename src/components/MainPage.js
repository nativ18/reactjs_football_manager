import * as React from "react";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {PlayerItem} from "./PlayerItem"

export class MainPageComponent extends React.Component {
    onPlayerClick = (player) => {
        this.props.history.push(`/player/${player.id}`)
    };

    render() {
        return (
            <div className="centered_container">
                <p className="sub_title">Your players</p>
                <list>
                    {this.props.players.map((player) => (
                        <div key={player.id} onClick={() => this.onPlayerClick(player)}>
                            <PlayerItem player={player} noButtons="true"/>
                        </div>
                    ))}
                </list>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    players: state.players
});

// connects the state to the component
export default connect(mapStateToProps)(MainPageComponent);

