import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 0
        };
        console.log('RENDER PHASE - ' + this.props.name + ' Mount Cycle - Constructor');
    }
    handleIncrement(countType) {
        if(countType === 'count1') {
            let count1 = this.state.count1;
            this.setState({count1:++count1})
        }else {
            let count2 = this.state.count2;
            this.setState({count2:++count2})
        }
    }
    componentDidMount() {
        console.log('COMMIT PHASE - ' + this.props.name + ' Mount Cycle - componentDidMount');
    }
    componentDidUpdate() {
        console.log('COMMIT PHASE - ' + this.props.name + ' Update Cycle - componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('COMMIT PHASE - ' + this.props.name + ' Unmount Cycle - componentWillUnmount');
    }
    render() {
        console.log('RENDER PHASE - ' + this.props.name + ' Mount Cycle - Render');
        return (
            <>
                <h1>Profile</h1>
                <h3>{this.props.name}</h3>
                <h3>{this.props.age}</h3>
                <span>{this.state.count1}</span>
                <button onClick={() => this.handleIncrement('count1')}>Count1 Increment</button>
                <span>{this.state.count2}</span>
                <button onClick={() => this.handleIncrement('count2')}>Count2 Increment</button>
            </>
        );
    }
}

export default Profile;