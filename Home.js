import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail,Item,
Input,Text} from 'native-base';
import {View,TouchableHighlight,ScrollView} from 'react-native';

export default class Page1 extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <Container style={{backgroundColor:'#FEF9E7'}}>
                <Header style={{backgroundColor:'#196F3D'}}>
                    <Left>
                        <Button transparent
                        onPress={()=>this.props.navigation.openDrawer()}
                        >
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> หน้าหลัก </Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                <View style={{flex:1}}>
                    <View style={{justifyContent:'center',flexDirection:'row',marginTop:30}}>
                        <Thumbnail
                            style={{height:300,width:300,borderRadius:100}}
                            source={{ uri: 'http://www.avocat-sabrina-rouzes.fr/wp-content/uploads/2017/02/arbre.jpg' }} />
                    </View>
                    <View style={{justifyContent:'center',flexDirection:'row',marginTop:30,marginBottom:10}}>
                        <Text style={{fontSize:25,fontWeight:'400'}}> ค้นหาพรรณไม้ </Text>
                    </View>
                    <Item rounded
                          style={{backgroundColor:'white',margin:20,marginLeft:20}}>
                            <Input
                                    placeholder="Search In Here"
                                    placeholderTextColor='#D5D8DC'
                                   returnKeyType = {"done"}
                                   onChangeText={(value) => {this.setState({text: value})}}
                                   value={this.state.text}
                            />

                            <TouchableHighlight
                                style={{height:50,width:80,backgroundColor:'#F4D03F',
                                    justifyContent:'center',flexDirection:'row',
                                    alignItems:'center',borderRadius:25}}>
                                <Text style={{fontSize:25,fontWeight:'500'}}>ค้นหา</Text>
                            </TouchableHighlight>

                    </Item>
                </View>
                </ScrollView>
            </Container>
        );
    }
}
