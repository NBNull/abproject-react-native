import React,{Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';
import { h, w} from '../../../constants'

const ImageCard = ({ data }) => {
    const {h1,cover,container,sub} = styles
    const { image, name } = data
    return (
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={{uri: image}} />
            </View>
            <Text  style={h1}>{ name.toUpperCase() }</Text>
        </View>   
           
    )
} 

const styles = StyleSheet.create({
    h1:{
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w/2.4,
        paddingTop: 10
    },
    cover:{
         width: w / 2.4,
         height: w * 0.63,
         borderRadius: 10   
    },
    container:{
        width: w / 2.1,
        paddingVertical:10
    },
    sub:{
        backgroundColor:'#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4
    }
})

export  default ImageCard 