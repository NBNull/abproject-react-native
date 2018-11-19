import React,{Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor:'#30d0fe',
      height:116,
      alignItems: 'flex-start',
      paddingLeft:22,
      paddingTop: 71,
      shadowColor: '#000',
      shadowOffset:{ width:0, height:2 },
      shadowOpacity:0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
       color:'#fff',
       fontSize:28,
       fontFamily:'AvenirNexr-DemiBold'
    }
});

export  { Header }