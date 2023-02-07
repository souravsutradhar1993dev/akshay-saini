import React from 'react';
import Profile from './Profile';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('RENDER PHASE - Parent Mount Cycle - Constructor');
    }
    componentDidMount() {
        console.log('COMMIT PHASE - Parent Mount Cycle - componentDidMount');
        this.timer = setInterval(function() {
            console.log('interval')
        }, 1000)
    }
    componentDidUpdate() {
        console.log('COMMIT PHASE - Parent Update Cycle - componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('COMMIT PHASE - Parent Unmount Cycle - componentWillUnmount');
        clearInterval(this.timer);
    }
    render() {
        console.log('RENDER PHASE - Parent Mount Cycle - Render');
        return (
            <>
                <h1>About</h1>
                <Profile name="Sourav" age="29" />
                <Profile name="Akshay" age="27" />
            </>
        );
    }
}

export default About;