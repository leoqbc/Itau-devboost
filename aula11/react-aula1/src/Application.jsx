import React from 'react';
import UserGrid from './UserGrid';


export default class Application extends React.Component {
    componentDidMount() {
        console.log('init');
    }

    render() {
        return (
        <section className="people-list">
            <h2>Create users!</h2>
            <UserGrid />
        </section>
        );
    }
}