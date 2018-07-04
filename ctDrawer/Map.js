import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class Map extends Component {

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#196F3D'}}>
                    <Left>
                        <Button transparent  onPress={()=>this.props.navigation.openDrawer()}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title> แผนที่พรรณไม้ </Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
            </Container>
        );
    }
}