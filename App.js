import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import Header from './src/components/uikit/header'
import ImageCard from './src/components/uikit/ImageCard'
import Layout from './src/components/uikit/Layout'


const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'


export default class App extends Component {
  state = {
    title:'Ab Project',
    data: []
  }

  componentDidMount = async () => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    }catch(e){
        throw e
    }
    
  }

  render() {
    const { title, data } = this.state
    return (
        <View>
          <Header title={title} />
          <ScrollView>
            <Layout>
                { data.map(item => (
                  <ImageCard data={item} key={item.id}/>
                  ))

                }
            </Layout> 
           </ScrollView>
        </View>  
        
        
    );
  }
}




