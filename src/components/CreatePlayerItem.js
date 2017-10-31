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
            imagePreviewUrl: '',
            id: props.player ? props.player.id : ''
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.createStateFromProps(nextProps));
    }

    onSubmit = (e) => {
        e.preventDefault(); // prevents default submi

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


    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <h1>wrong input!</h1>}
                    <h1>Choose player settings:</h1>
                    <input type="file" onChange={this.handleImageChange}/>
                    {this.state.imagePreviewUrl && <img src={this.state.imagePreviewUrl} width={200} height={200}/>}
                    <input type="text"
                           value={this.state.fullname}
                           placeholder='name'
                           onChange={this.onFullnameChange}/>
                    <input type="text"
                           value={this.state.age}
                           placeholder='age'
                           onChange={this.onAgeChange}/>
                    <input type="text"
                           value={this.state.position}
                           placeholder='position'
                           onChange={this.onPositionChange}/>
                    <input type="text"
                           value={this.state.price}
                           placeholder='price'
                           onChange={this.onPriceChange}/>
                    <button type="submit">{this.state.id ? "Edit" : "Create"}</button>
                </form>
            </div>)
    }
}