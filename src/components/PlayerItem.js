import * as React from "react";
import {Link} from "react-router-dom";

export class PlayerItem extends React.Component {

    constructor(props) {
        super(props)

        // if (!this.props.player.image){
        //     let reader = new FileReader();
        //     let file = new file('../../res/avatarph.png');
        //
        //     reader.onloadend = () => {
        //         this.setState({
        //             imagePreviewUrl: reader.result,
        //             file: file
        //         });
        //     }
        //
        //     reader.readAsDataURL(file)
        // }
    }

    onRemoveBtnClick = () => {
        this.props.removePlayer(this.props.player.id)
    }

    render() {
        return (
            <div className="centered_container">
                {/*{!props.player && this.props.history.push('/')}*/}
                <p className="sub_title">{this.props.player.fullname}</p>
                <div className="player_item">
                    {this.props.player.image ?
                        <img src={this.props.player.image} className="img_float_left player_single_text"/> :
                        <img
                            src={require('../../public/images/avatarph.png')}
                            className="img_float_left player_single_text"/>}
                    <div className="players_details_style">
                        <h2 className="player_single_text_double">Age: {this.props.player.age}</h2>
                        <h2 className="player_single_text">Price: {this.props.player.price}</h2>
                        <h2 className="player_single_text">Position: {this.props.player.position}</h2>
                        <h2 className="player_single_text">Description: {this.props.player.description}</h2>
                    </div>

                    {!this.props.noButtons &&
                    <div className="player_bottom_btns">
                        <button className="remove_button" onClick={this.onRemoveBtnClick}>Remove</button>
                        <Link className="small_button" to={`/edit/${this.props.player.id}`}>Edit</Link>
                    </div>}
                </div>
            </div>
        );
    };
}

