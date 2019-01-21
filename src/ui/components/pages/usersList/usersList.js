import React from 'react';

export default class UsersListPage extends React.Component {
    componentDidMount() {
        this.props.dispatch.users.getUsers();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}