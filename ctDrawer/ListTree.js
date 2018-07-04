import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,
    List, ListItem, Content, Text, Thumbnail, icon ,View,Input,Item} from 'native-base';
import {TextInput} from 'react-native';

var tree = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'
    ,'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];

export default class Page2 extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    /*filterSearch(text){
        const newData = tree.filter(function (item) {
            const itemData = item.tree.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }*/

    clearText(){
        this.setState({text:''})
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#196F3D'}}>
                    <Left>
                        <Button transparent  onPress={()=>this.props.navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title> รายชื่อพรรณไม้ </Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>

                    <Item >
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                            <Input placeholder="Search In Here"
                                   placeholderTextColor='#D5D8DC'
                                   returnKeyType = {"done"}
                                onChangeText={(value) => {this.setState({text: value})}}
                                value={this.state.text}
                            />
                        </View>
                        <View>
                            <Icon name='close' style={{fontSize: 25, color: 'red',marginRight:15}}
                                  onPress={()=>{this.clearText()}}
                            />
                        </View>
                    </Item>
                <Content>
                    <List dataArray={tree}
                          renderRow={(item) =>
                              <ListItem avatar
                                        onPress={()=>{alert(item.toString())}}
                              >
                                  <Left>
                                      <Thumbnail source={{ uri: 'http://www.avocat-sabrina-rouzes.fr/wp-content/uploads/2017/02/arbre.jpg' }} />
                                  </Left>
                                  <Body>
                                    <Text >{item}</Text>
                                  <Text note>Doing what you like will always keep you happy . .</Text>
                                  </Body>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}