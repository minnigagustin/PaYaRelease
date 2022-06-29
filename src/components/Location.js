import React, { Component } from 'react';  
import { AppRegistry, ScrollView, Image, Text, Button, StyleSheet, View } from 'react-native'; 
import axios from "axios"; 
import { Constants, MapView, Permissions } from 'expo';
import * as Location from 'expo-location';
import RestaurantesView from './Restaurantes';


export default class LocationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      south: null,
      west: null,
      north: null,
      east: null,
      latitude: null,
      longitude: null,
    };
  }

  updateState(location) {
    this.setState({
      ...this.state,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  async componentDidMount() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.updateState(location);
      console.log(location);
    } catch (error) {
      console.log(error);
    }
  }

   render() {
      return (
        <View style={styles.container}>
         
          <RestaurantesView navigation={this.props.navigation} latitude={this.state.latitude} longitude={this.state.longitude} />

          <Text>{this.state.latitude}</Text>
          <Text>{this.state.longitude}</Text>
        </View>
          
      );
 
  }
  
}  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});