import * as React from "react";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {removePlayer} from "../actions/players";

export class PlayerPage extends React.Component {

    constructor(props) {
        super(props)

        if (!props.player)
            this.props.history.push('/')
    }

    onRemove = () => {
        this.props.removePlayer({id: this.props.player.id});
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                {console.log("b = " + this.props.player)}
                <PlayerPageItem player={this.props.player} removePlayer={this.onRemove}/>
            </div>

        );
    };
}

class PlayerPageItem extends React.Component {

    onRemoveBtnClick = () => {
        this.props.removePlayer(this.props.player.id)
    }

    render() {
        return (
            <div>
                <text>Player Details:</text>
                <text>Name: {this.props.player.fullname}</text>
                <text>Age: {this.props.player.age}</text>
                <text>Price: {this.props.player.position}</text>

                <div>
                    <button onClick={this.onRemoveBtnClick}>Remove</button>
                    {console.log("this.props.player.id = " + this.props.player.id)}
                    <Link to={`/edit/${this.props.player.id}`}>Edit</Link>
                </div>
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
        removePlayer: (id) => dispatch(removePlayer(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);
