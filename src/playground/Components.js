import * as React from "react";
import moment from "moment";

export const TopVarSlim = () => (
    <div>
        <h1>TopBar No render and no constructor </h1>
    </div>
);


export class TopVarFull extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (<div>TopBar with render and with constructor</div>);
    }
}


export class TopVarFullWithProp extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        console.log(this.props)
        return (<div><h6>TopBar with all. info = {this.props.info}</h6></div>);

        // timer(3000, () => {
        //     this.props.store.dispatch(addExpense({
        //         description: 'asddaddds',
        //         note: '',
        //         amount: 1000,
        //         createdAt: moment()
        //     }))
        // })
    }
}
