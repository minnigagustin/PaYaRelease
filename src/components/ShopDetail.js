import React from "react";
import {View, Text, Image, Linking, Alert, ScrollView, TouchableOpacity} from "react-native";

const ShopDetail = (props) =>{
    return(

   <TouchableOpacity  style ={styles.touchStyle}
							onPress={() => props.navigation.navigate('Web', {url:props.section.content[0].url})}
	 >
                    <Image
                    style ={styles.imageStyle} 
                    source= { {uri: props.section.content[0].image} } 
                    />

    </TouchableOpacity>
    );
};

const styles = {
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
        height: 110,
        flex: 1,
        width:110,
        resizeMode: 'contain', 
        marginTop: 0,
        marginBottom: 0
    },

    touchStyle:{
        height: 110,
        flex: 1,
        width:90,
        marginTop: 0,
        marginLeft: 0,
        marginBottom: 0
    }

};

export default ShopDetail;