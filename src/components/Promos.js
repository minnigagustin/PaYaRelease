import React, { Component } from 'react';  
import { AppRegistry, ScrollView, Image, Text, Button, StyleSheet, View } from 'react-native'; 
import axios from "axios"; 
import ShopDetail from './ShopDetail';
import ComidasDetail from './ComidasDetail';
import PromosDetail from './PromosDetail';
  
 class PromoView extends Component {  
    
    constructor(){
        super();
        this.state = { CarList:[] };
        //this.url = "https://givecars.herokuapp.com";
        this.url = "https://tamitut.com/PAYA/carros/promos.php";
       this.state = { SectionList:[] };
    }

    componentDidMount () {   
        axios.get(this.url).then(response => {  
            console.log(this.url);
            this.setState({ SectionList: response.data });
        });
        
    }

    renderList = () =>{
        return this.state.SectionList.map( section =>{
            console.log(section.content[0].image);
            return <PromosDetail key ={section.content[0].name} section={section} />;
        });
    };
    
    onPressButton() {  
        alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>  
             
                {this.renderList()}   
                {this.renderList()} 
                {this.renderList()} 
         
           
         
            </ScrollView>  
        );  
    }  
}  

export default PromoView ;  