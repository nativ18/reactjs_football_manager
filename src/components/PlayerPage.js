import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {removePlayer} from "../actions/players";
import {PlayerItem} from "./PlayerItem";

export class PlayerPage extends React.Component {

    constructor(props) {
        super(props)
        let player;
        if (props.player) {
            player = props.player
        } else {
            player = localStorage.getItem(props.match.params.id)
        }

        if (!player) {
            this.props.history.push('/')
            return null
        }
        // state is a player
        this.state = player;
    }

    componentDidMount() {
        // happens when user types the url ("http://localhost:8080/player/f53f7aef-fbc1-4f81-ab35-accd37140478")
        // the app rounter doesn't get called and the props doesn't get populated with the player

        if (!this.state) {
            this.props.history.push('/')
        }
    }

    onRemove = () => {
        this.props.removePlayer({id: this.state.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <PlayerItem player={this.state} removePlayer={this.onRemove}/>
            </div>

        );
    };
}

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.id === props.match.params.id)
    }
};

// sending function that create players into component
const mapDispatchToProps = (dispatch, props) => {
    return {
        removePlayer: (id) => dispatch(removePlayer(true, id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
