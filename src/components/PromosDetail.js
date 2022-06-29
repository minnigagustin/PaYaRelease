import React from "react";
import {View, Text, Image, Linking, Alert, ScrollView, TouchableOpacity} from "react-native";
const PromosDetail = ({section}) =>{
    return(
        
        <TouchableOpacity style ={styles.touchStyle} onPress ={ () =>   {
            Linking.openURL(section.content[0].url);
            console.log("OK");
        }
        }>
        <ScrollView horizontal={true} style={{flex: 1}}>
               
    
                    <Image
                    style ={styles.imageStyle} 
                    source= { {uri: section.content[0].image} } 
                    />
               
        </ScrollView> 
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
        height: 150,
        flex: 1,
        width:450,
        marginTop: 5,
        marginBottom: 20
    },

    touchStyle:{
        height: 160,
        flex: 1,
        width:465,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 15,
        marginBottom: 5
    }

};

export default PromosDetail;