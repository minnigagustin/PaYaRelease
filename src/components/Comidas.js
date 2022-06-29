import React, { Component } from 'react';  
import { AppRegistry, ScrollView, Image, Text, Button, StyleSheet, View } from 'react-native'; 
import AutoScrollView from 'react-native-auto-scroll-view';
import axios from "axios"; 
import ShopDetail from './ShopDetail';
import ComidasDetail from './ComidasDetail';
  
 class ComidasView extends Component {  
    
    constructor(){
        super();
        this.scroll=10;
        this.state = { CarList:[] };
        //this.url = "https://givecars.herokuapp.com";
        this.url = "https://tamitut.com/PAYA/carros/comidas.php";
       this.state = { SectionList:[] };
    }



    componentDidMount () {   
        axios.get(this.url).then(response => {  
            console.log(this.url);
            this.setState({ SectionList: response.data });
        });
    
        
    }
    // Con esto se hace el Auto SCROLL
    /*
    componentDidUpdate () {   
         console.log("ñu pdasssshs  dd te");
         
         axios.get(this.url).then(response => {  
            console.log(this.url);
            this.setState({ SectionList: response.data });
        });
        
        // this.setState({ scroll: this.scroll+10 });
         this.scroll=this.scroll+20;
         if(this.scroll>900){
            this.scroll=20;
         }
         this._scrollView.scrollTo({x:1 *  this.scroll});
         console.log(this.scroll);
        
    }

 */

    renderList = () =>{
        return this.state.SectionList.map( section =>{
            //console.log(section.model[0].image);
            console.log(section.content[0].image);
            return <ComidasDetail key ={section.content[0].name} section={section} navigation = {this.props.navigation}/>;
        });
    };
    
    onPressButton() {  
        alert('You clicked the bu tton!')  
    }  
  
    render() {  
        return (  
           
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }  } ref={view =>             this._scrollView = view}>  
                {this.renderList()}   
                {this.renderList()}   
                {this.renderList()}    
        </ScrollView>  
        );  
    }  
}  

export default ComidasView ;  