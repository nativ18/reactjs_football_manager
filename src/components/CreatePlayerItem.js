import React from 'react';

export class CreatePlayerItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: props.player ? props.player.fullname : '',
            age: props.player ? props.player.age : '',
            price: props.player ? props.player.price : 0,
            position: props.player ? props.player.position : 'No position',
            error: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault(); // prevents default submission of the form that makes the whole page refresh

        if (!this.state.fullname || !this.state.age) {
            this.setState(() => ({error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({error: ''}));
            const player = {
                fullname: this.state.fullname,
                age: this.state.age,
                price: this.state.price,
                position: this.state.position
            };
            this.props.onPlayerCreated(player);
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

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <h1>wrong input!</h1>}
                    <h1>Choose player settings:</h1>
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
                    <button type="submit">Create</button>
                </form>
            </div>)
    }
}