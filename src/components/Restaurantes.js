import React, { Component } from 'react';  
import { AppRegistry, ScrollView, Image, Text, Button, StyleSheet, View } from 'react-native'; 
import axios from "axios"; 
import ShopDetail from './ShopDetail';
import RestaurantesDetail from './RestaurantesDetail';
  
 class RestaurantesView extends Component {  
    
    constructor(props){
        super(props);
        this.state = { CarList:[] };
        this.url = "https://tamitut.com/PAYA/carros/restaurantes.php?lat=34&lon=12";
        this.state = { SectionList:[] };
    }

    componentDidMount () {
          axios.get(this.url).then(response => {  
              console.log(this.url);
              this.setState({ SectionList: response.data });
          });
        
    }

      componentDidUpdate() {
           axios.get(this.url).then(response => {  
              this.url = "https://tamitut.com/PAYA/carros/restaurantes.php?lat=" + this.props.latitude + "&lon=" +                    this.props.longitude ;
              console.log(this.url);
              this.setState({ SectionList: response.data });
          });
      }

    renderList = () =>{
        return this.state.SectionList.map( section =>{
            console.log(this.props.latitude);
            return <RestaurantesDetail key ={section.content[0].name} section={section} navigation={this.props.navigation}/>;
        });
    };
    
    onPressButton() {  
        alert('You clicked the buttoonl!')  
    }  
  
    render() {  
        return (  
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>  
                {this.renderList()}   
            </ScrollView>  
        );  
    }  
}  
export default RestaurantesView ;  