import * as React from "react";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";

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
                            {/*{console.log("id = " + player.id)}*/}
                            <Link to={`/player/${player.id}`}>name is {player.fullname}. age
                                is {player.age}</Link>
                            {player.image && <img src={player.image} width={200} height={200}/>}
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

