import * as React from 'react';
import { Text, View ,TouchableOpacity, ScrollView , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import ShopView from './src/components/Shops';
import ComidasView from './src/components/Comidas';
import PromoView from './src/components/Promos';
import RestaurantesView from './src/components/Restaurantes';
import LocationView from './src/components/Location';



function HomeScreen({navigation}) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ScrollView>
            <ShopView     navigation={navigation}/>
            <ComidasView  navigation={navigation}/>
            <PromoView    navigation={navigation}/>
            <ShopView     navigation={navigation}/>
            <ComidasView  navigation={navigation}/>
            <PromoView    navigation={navigation}/>

    </ScrollView>
      
    </View>
  );
}

function WebScreen({route}) {
  //source={{uri: props.route.params.url}}
  // source={{uri: props.url}}

  if( route  === ''){
      return (
     <Text>Hola</Text>
  
  );
  }
  
  else{
     const { url } = route.params;
      return (
     <WebView
        source={{uri: url}}
        style={{ marginTop: 0 }}
      />
  );

  }
  
}

function LogoTitle() {
  return (
    <View>
      <Image
        style={{ width: 100, height: 50, resizeMode: 'stretch',   paddingLeft: 20 }}
        source={require('./src/components/md-logo.png')}
      />
    </View>
  
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
      <LocationView  navigation={navigation} />
     
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={HomeScreen}  options={{  headerTitle: (props) => <LogoTitle {...props} /> }} />
      <HomeStack.Screen name="Web" component={WebScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({navigation}) {
  return (
    <Tab.Navigator
    
          screenOptions={ ({ route }) => ({
          tabBarStyle: {
            height: 50,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#000000',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Inicio') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home'
                      : 'home-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Negocios') {
              return (
                <Ionicons
                  name={focused ? 'list' : 'list-outline'}
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === 'Web') {
              return (
                <Ionicons
                  name={focused ? 'bookmark' : 'bookmark'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })
    }>
      <Tab.Screen name="Inicio" component={HomeScreen}  options={{ headerStyle: {
          backgroundColor: '#000000', height: 100
        }, headerTitle: (props) => <LogoTitle {...props} /> }}/>
      <Tab.Screen name="Negocios" component={SettingsScreen}  options={{ headerStyle: {
          backgroundColor: '#000000', height: 100
        }, headerTitle: (props) => <LogoTitle {...props} /> }} />
      <Tab.Screen name="Web"    component={WebScreen}   initialParams={{url: 'https://app.pidepaya.com/' }} options={{ headerStyle: {
          backgroundColor: '#000000', height: 100
        }, headerTitle: (props) => <LogoTitle {...props} /> }}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <>
  <NavigationContainer>
  <MyTabs />
  </NavigationContainer>
  </>
  );
}
