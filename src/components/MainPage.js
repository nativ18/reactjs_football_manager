import * as React from "react";
import EditExpensePage from "./EditExpensePage";
import connect from "react-redux/es/connect/connect";

export class MainPageComponent extends React.Component {
    render() {
        return (
            <div>
                {/*<button>Create Player</button>*/}
                {/*<button>Search Players</button>*/}
                <div>Your players</div>
                <list>
                    {this.props.players.map((player) => (
                        <div key={player.id}>
                            <li>name is {player.fullname}. age = {player.age}</li>
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

