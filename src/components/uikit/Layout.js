import React from 'react'
import {StyleSheet, ScrollView, View, Image} from 'react-native'

const Layout = props => {
    const { container } = styles
    return (
        <ScrollView>
            <View style={container}>
                {  props.children }
                   
                
            </View>    
        </ScrollView>        
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        flexDirection:'row',
        flexWrap: 'wrap',
        marginLeft:15,
        marginBottom:150,
        flexShrink:2,
        justifyContent: 'space-around'
    }
  })
export default Layout