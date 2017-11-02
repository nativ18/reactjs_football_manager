import * as React from "react";
import {createPlayer, editPlayer} from "../actions/players";
import {CreatePlayerItem} from "./CreatePlayerItem";
import connect from "react-redux/es/connect/connect";

class CreatePlayerPage extends React.Component {

    onPlayerCreated = (player) => {
        if (player.id)
            this.props.editPlayer(player);
        else
            this.props.createPlayer(player);

        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                {console.log("111 - this.props.player = " + this.props.player)}

                <CreatePlayerItem
                    player={this.props.player}
                    onPlayerCreated={this.onPlayerCreated}
                />
            </div>
        );
    }
};

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// sending function that create players into component
const mapDispatchToProps = (dispatch, props) => ({
    createPlayer: (player) => dispatch(createPlayer(true, player)),
    editPlayer: (player) => dispatch(editPlayer(true, player.id, player))
});

const mapStateToProps = (state, props) => ({
    player: state.players.find((player) => player.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayerPage)