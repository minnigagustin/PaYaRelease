import React from "react";
import {View, Text, Image, Linking, Alert, ScrollView, TouchableOpacity, ImageBackground} from "react-native";
const ComidasDetail = (props) =>{
    return(
        
        <TouchableOpacity 
        style ={styles.touchStyle} 	
        onPress={() => props.navigation.navigate('Web', {url: props.section.content[0].url})}
        >
            <View style={styles.container}>
                <ImageBackground
                  style={styles.imageStyle}
                  source={{uri: props.section.content[0].image}}
                >
                <View style={styles.textView}>
                <Text style={styles.imageText}>{props.section.content[0].name}</Text>
                </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = {

  container: {
    flex: 1,
  },
    headerContainer: {
        flexDirection: "column",
        justifyContent: "space-between"
    },

    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    imageStyle:{
        height: 120,
        flex: 1,
        width:180,
        marginTop: 0,
        resizeMode: 'stretch',
        marginBottom: 10
    },

    touchStyle:{
        height: 130,
        flex: 1,
        width:180,
        marginTop: 0,
        marginRight: 5,
        marginLeft: 15,
        marginBottom: 0
    },

    coverImage: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

};

export default ComidasDetail;