import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title ,
    List, ListItem, Content, Text, Thumbnail, icon ,View,Input,Item} from 'native-base';
import { FlatList, ActivityIndicator,TouchableHighlight} from 'react-native';

export default class Page2 extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.state = {selected: (new Map(): Map<string, boolean>)};
    }

    componentDidMount(){
        return fetch('http://192.168.1.22/DBCheck.php')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.plantID}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.plantID)}
            title={item.plantName}
            titleEN={item.plantScience}
        />
    );

    clearText(){
        this.setState({text:''})
    }

    render() {

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
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
                                onChangeText={(value) => {this.setState({text:value})}}
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
                    <FlatList
                        data={this.state.dataSource}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </Content>
            </Container>
        );
    }
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
        alert(this.props.title);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableHighlight onPress={this._onPress}>
                <View style={{borderBottomWidth:1}}>
                    <Text style={{ color: 'black' }}>
                        {this.props.title}
                    </Text>
                    <Text style={{ color: 'black' }}>
                        {this.props.titleEN}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}