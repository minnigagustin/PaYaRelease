import React from "react";
import {View, Text, Image, Linking, Alert, ScrollView, TouchableOpacity} from "react-native";
//	onPress={() => props.navigation.navigate('Web', {url : props.section.content[0].url})}
const RestaurantesDetail = (props) =>{
    return(



          <TouchableOpacity  style ={styles.touchStyle}
							onPress={() => props.navigation.navigate('Web', {url : props.section.content[0].url}) }
			    >
 
                    <Image
                    style ={styles.imageStyle} 
                    source= { {uri: props.section.content[0].image} } 
                    />

          <Text> {props.section.content[0].name}</Text>
          <Text> {props.section.content[0].distancia}km</Text>
        </TouchableOpacity>
           
    );
};

const styles = {
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    imageStyle:{
        height: 150,
        flex: 1,
        width: 350,
         resizeMode: 'stretch',
       // width:250,
        marginTop: 5,
        marginBottom: 20
    },

    touchStyle:{
        height: 250,
        flex: 1,
        width: 350,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 5
    }

};

export default RestaurantesDetail;