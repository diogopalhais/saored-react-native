import React from "react";
import { 
  View, 
  Text,
  Image,
  ImageBackground,
  Linking 
} from "react-native";
import { Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => { 
    return { 
        headerTitle: <View style={{backgroundColor:'transparent',marginTop:25,padding:10,borderRadius:50}}><Image
          style={{width:80,height:50}}
          source={require('./logo2.png')}
        /></View>, 
        headerRight: (
          <Icon
            reverse
            reverseColor='white'
            name='more-horizontal'
            type='feather'
            underlayColor='red'
            color='transparent'
            containerStyle={{marginTop:10,marginRight:5}}
            onPress={() => navigation.navigate('Details')} />
        ),
        headerTransparent: true, 
        headerStyle: { 
          borderBottomWidth: 0,
          elevation:0, 
        } 
      } 
    }
  
  render() {
    return (
      <ImageBackground
          style={{flex:1}}
          source={require('./g2.gif')}
        />
    );
  }

}

class DetailsScreen extends React.Component {

  static navigationOptions = ({navigation}) => { 
    return {  
        headerStyle: { 
          elevation:0, 
        } 
      } 
    }

  render() {
    return (
      <View style={{ flex: 1, padding:20, alignItems: 'center', justifyContent: 'space-between' }}>
        
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
          <Text style={{ fontSize:25, marginTop:20 }}>
            Na RedAdviser {"\n"}
            A festa é todo o dia {"\n"}
            manjerico não precisamos {"\n"}
            porque temos a Sofia
          </Text>
        </View>

        <View style={{flex:1,alignItems: 'center',justifyContent:'flex-end',marginBottom:20}}>
          <View style={{flexDirection: 'row'}}>
            <Image
                style={{width:100,height:100}}
                source={require('./icone.png')}
              />
            <Image
                style={{width:120,height:120}}
                source={require('./logo.png')}
              />
          </View>  
          <Text 
          style={{ fontSize:15,fontWeight: 'bold'}}
          onPress={ ()=> Linking.openURL('http://redadviser.com')}
          >
            http://redadviser.com
          </Text>
        </View>

      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
},{headerLayoutPreset: 'center'});

export default createAppContainer(AppNavigator);