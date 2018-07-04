import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableHighlight,Image,StyleSheet} from 'react-native';


class SideMenu extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    constructor() {
        super();
        this.state = {
            pressedBtn1: true,  /* ค่าแรกเริ่ม ให้กดปุ่ม ลากิจไว้*/
            pressedBtn2: false, /* ยังไม่กด*/
            pressedBtn3: false /* ยังไม่กด*/
        }
    }

    render () {
        return (

            <View style={{flex:1,backgroundColor:'#FEF9E7'}}>
                <ScrollView>
                <View style={{height: 210,backgroundColor:'#1E8449',alignItems:'center'}}>
                    <Image source={{uri : 'http://www.pnru.ac.th/themes/responsive_2017_5/images/pnru_logo.png'}}
                           style={{height: 160, width: 130,marginTop:10}}/>
                    <Text style={{fontSize:18,color:'white'}}> มหาวิทยาลัยราชภัฏพระนคร </Text>
                </View >
                    <View >
                        <View style={{backgroundColor:'#FEF9E7',borderBottomWidth:0.3}}>
                            <TouchableHighlight
                                style={[styles.button, this.state.pressedBtn1 ? {backgroundColor:'#F1C40F'} : {}]}
                                onPress={this.navigateToScreen('Home')}
                                onShowUnderlay={()=>{this.setState({pressedBtn1: true})}}
                                onHideUnderlay={()=>{this.setState({pressedBtn2: false,pressedBtn3: false})}}>
                                <Text style={{marginLeft:10,fontWeight:'400',fontSize:20}}> หน้าหลัก </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={{backgroundColor:'#FCF3CF',borderBottomWidth:0.3}}>
                            <TouchableHighlight
                                onPress={this.navigateToScreen('ListTree')}
                                style={[styles.button, this.state.pressedBtn2 ? {backgroundColor:'#F1C40F'} : {}]}
                                onShowUnderlay={()=>{this.setState({pressedBtn2: true})}}
                                onHideUnderlay={()=>{this.setState({pressedBtn1: false,pressedBtn3: false})}}
                            >
                                <Text style={{marginLeft:10,fontWeight:'400',fontSize:20}}> รายชื่อพรรณไม้ </Text>
                            </TouchableHighlight>
                        </View>
                        <View  style={{backgroundColor:'#FCF3CF',borderBottomWidth:0.3}}>
                            <TouchableHighlight
                                onPress={this.navigateToScreen('Map')}
                                style={[styles.button, this.state.pressedBtn3 ? {backgroundColor:'#F1C40F'} : {}]}
                                onShowUnderlay={()=>{this.setState({pressedBtn3: true})}}
                                onHideUnderlay={()=>{this.setState({pressedBtn1: false,pressedBtn2: false})}}
                            >
                                <Text style={{marginLeft:10,fontWeight:'400',fontSize:20}}> แผนที่พรรณไม้ </Text>
                            </TouchableHighlight>
                        </View>

                        <View  style={{backgroundColor:'#FCF3CF',borderBottomWidth:0.3}}>
                            <TouchableHighlight
                                style={styles.button}
                            >
                                <Text style={{marginLeft:10,fontWeight:'400',fontSize:20}}> Page 4 </Text>
                            </TouchableHighlight>
                        </View>

                        <View  style={{backgroundColor:'#FCF3CF',borderBottomWidth:0.3}}>
                            <TouchableHighlight
                                style={styles.button}
                            >
                                <Text style={{marginLeft:10,fontWeight:'400',fontSize:20}}> Page 5 </Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </ScrollView>
                <View style={{backgroundColor:'#FEF9E7',flexDirection:'row',justifyContent:'flex-start'}}>
                    <Text> ติดต่อ </Text>
                </View>
                <View style={{backgroundColor:'#FEF9E7',alignItems:'center',borderTopWidth:0.3}}>
                    <Text style={{fontWeight:'300',fontSize:20}}> This is my fixed footer </Text>
                </View>
            </View>
        );
    }
}

export default SideMenu;

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        backgroundColor:'#FEF9E7',
        height: 40
    },
    ColText : {
        fontWeight:'400',
        fontSize:18,
    },
});