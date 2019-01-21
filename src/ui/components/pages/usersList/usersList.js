import React from 'react';
import {styled, LinedBlock, Card, Block} from '@qiwi/pijma-core';
import {Paragraph, Heading, Text} from '@qiwi/pijma-desktop';
import {Loader} from "../../common/Loader";

const UsersListContainer = styled.div`
    width: 700px;
    margin: auto;
`;

const HeaderContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export default class UsersListPage extends React.Component {
    componentDidMount() {
        this.props.dispatch.users.getUsers();
    }

    render() {
        if (this.props.loading || this.props.initial) return <Loader/>;

        if (this.props.loadingError) return <Block>
            <Card p={7}>
                <Paragraph size="m">{this.props.users.data && this.props.users.data.message}</Paragraph>
            </Card>
        </Block>;

        return (<UsersListContainer>
            <HeaderContainer>
                <Heading size={"1"}>Пользователи:</Heading>
            </HeaderContainer>
            <LinedBlock>
                {this.props.users.data.length && this.props.users.data.map((user, ind) => {
                    return <Card key={ind} p={4}>
                        <Paragraph size="m">
                            <Text bold>Имя: </Text>{user.userName}  <Text bold>Почта: </Text>{user.userEmail}
                        </Paragraph>
                    </Card>
                })}
            </LinedBlock>
        </UsersListContainer>);
    }
}