import * as React from "react";
import {createPlayer} from "../actions/players";
import {CreatePlayerItem} from "./CreatePlayerItem";
import connect from "react-redux/es/connect/connect";

class CreatePlayerPage extends React.Component {
    onPlayerEdited = (player) => {
        this.props.editPlayer(player);
        this.props.history.push('/');
    };
    onRemove = (player) => {
        // this.props.removePlayer({id: player.id});
        // this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <CreatePlayerItem
                    player={this.props.player}
                    onPlayerCreated={this.onPlayerEdited}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
};

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// sending function that create players into component
const mapDispatchToProps = (dispatch, props) => ({
    editPlayer: (player) => dispatch(createPlayer(true, player))
});

const mapStateToProps = (state, props) => ({
    player: state.players.find((player) => player.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayerPage)