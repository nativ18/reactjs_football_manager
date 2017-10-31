import * as React from "react";
import {createPlayer} from "../actions/players";
import {CreatePlayerItem} from "./CreatePlayerItem";
import connect from "react-redux/es/connect/connect";

class CreatePlayerPage extends React.Component {
    onPlayerCreated = (player) => {
        this.props.addPlayer(player.id, player);
        this.props.history.push('/');
    };
    onRemove = (player) => {
        this.props.removeExpense({id: player.id});
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <CreatePlayerItem
                    player={this.props.player}
                    onPlayerCreated={this.onPlayerCreated}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
};

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

// sending function that create players into component
const mapDispatchToProps = (dispatch, props) => ({
    addPlayer: (player) => dispatch(createPlayer(player))
});

const mapStateToProps = (state, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayerPage)