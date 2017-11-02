import React from 'react';

export class CreatePlayerItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.createStateFromProps(props)
    }

    // mine. not override
    createStateFromProps(props) {
        return {
            fullname: props.player ? props.player.fullname : '',
            age: props.player ? props.player.age : '',
            price: props.player ? props.player.price : '',
            position: props.player ? props.player.position : '',
            error: '',
            imagePreviewUrl: props.player ? props.player.image : '',
            file: props.player ? props.player.file : '',
            description: props.player ? props.player.description : '',
            id: props.player ? props.player.id : ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.createStateFromProps(nextProps);
    }

    onSubmit = (e) => {
        e.preventDefault(); // prevents default submit

        if (!this.state.fullname || !this.state.age) {
            this.setState(() => ({error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onPlayerCreated({
                id: this.state.id,
                fullname: this.state.fullname,
                age: this.state.age,
                price: this.state.price,
                position: this.state.position,
                image: this.state.imagePreviewUrl,
                description: this.state.description,
                file: this.state.file
            });
        }
    }

    onFullnameChange = (e) => {
        const fullname = e.target.value;
        this.setState(() => ({fullname}));
    };
    onAgeChange = (e) => {
        const age = e.target.value;
        this.setState(() => ({age}));
    };

    onPriceChange = (e) => {
        const price = e.target.value;
        this.setState(() => ({price}));
    };

    onPositionChange = (e) => {
        const position = e.target.value;
        this.setState(() => ({position}));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }


    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(e.target)

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result,
                file: file
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        console.log(this.state.file)
        return (
            <div className="centered_container">
                <form className="centered_container" onSubmit={this.onSubmit}>
                    {this.state.error && <h1>wrong input!</h1>}
                    <h1>Choose player settings:</h1>
                    <div className="centered_container">
                        <input className="input" type="file" onChange={this.handleImageChange}/>
                        <br/>
                        {this.state.imagePreviewUrl ?
                            <img src={this.state.imagePreviewUrl} className="player_single_text"/> :
                            <img
                                src={require('../../public/images/avatarph.png')}
                                className="player_single_text"/>}
                        <br/>
                        <input type="text"
                               value={this.state.fullname}
                               placeholder='Full Name'
                               className="input"
                               onChange={this.onFullnameChange}/>
                        <br/>
                        <input type="text"
                               value={this.state.age}
                               placeholder='Age'
                               className="input"
                               onChange={this.onAgeChange}/>
                        <br/>
                        <input type="text"
                               value={this.state.position}
                               placeholder='Position'
                               className="input"
                               onChange={this.onPositionChange}/>
                        <br/>
                        <input type="text"
                               value={this.state.price}
                               placeholder='Price'
                               className="input"
                               onChange={this.onPriceChange}/>
                        <br/>
                    </div>
                    <textarea
                        type="text"
                        value={this.state.description}
                        placeholder='Tell us who you are'
                        className="big_input"
                        onChange={this.onDescriptionChange}
                    />
                    <br/>
                    <button className="create_player_button" type="submit">{this.state.id ? "Edit" : "Create"}</button>
                </form>
            </div>)
    }
}