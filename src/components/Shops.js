import React, { Component } from 'react';  
import { AppRegistry, ScrollView, Image, Text, Button, StyleSheet, View } from 'react-native'; 
import axios from "axios"; 
import ShopDetail from './ShopDetail';
  
 class ShopView extends Component {  
    
    constructor(){
        super();
        this.scroll=10;
        this.state = { CarList:[] };
        //this.url = "https://givecars.herokuapp.com";
        this.url = "https://tamitut.com/PAYA/carros/shops.php";
        this.state = { SectionList:[] };
    }

    componentDidMount () {   
        axios.get(this.url).then(response => {  
            console.log(this.url);
            this.setState({ SectionList: response.data });
        });
        
    }

        componentDidUpdate () {   
         console.log("ñu pdasssshs  dd te");
         
         axios.get(this.url).then(response => {  
            console.log(this.url);
            this.setState({ SectionList: response.data });
        });
        
        // this.setState({ scroll: this.scroll+10 });
         this.scroll=this.scroll+10;
         if(this.scroll>500){
            this.scroll=10;
         }
         this._scrollView.scrollTo({x:1 *  this.scroll});
         console.log(this.scroll);
        
    }

    renderList = () =>{
        return this.state.SectionList.map( section =>{
            console.log(section.content[0].image);
            return <ShopDetail key ={section.content[0].name} section={section} navigation={this.props.navigation} />;
        });
    };
    
    onPressButton() {  
        alert('You clicked the button!')  
    }  
  
    render() {  
        return (  
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} ref={view => this._scrollView = view}>  
             
                {this.renderList()}   
                {this.renderList()} 
                {this.renderList()} 
         
           
         
            </ScrollView>  
        );  
    }  
}  
export default ShopView ;  