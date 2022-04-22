import { View, Text, StyleSheet, Image, Platform, SafeAreaView } from 'react-native'
import React from 'react'

export default function Card({data}) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
            <Image
                style={styles.logo}
                source={{
                uri:data.image,
                }}
            />  
        </View>
        <View style={styles.textContainer}>
            <Text>{data.name}</Text> 
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 56,
      borderRadius: 8,
      minWidth: "100%",
      margin: 8,
      padding: 8,
      ...Platform.select({
        ios: {
          shadowColor: "black",
          shadowOpacity: 0.8,
          shadowRadius: 5,
          shadowOffset: {
            height: 5,
            width: 0,
          },
        },
        android: {
          elevation: 8,
        },
      }),
    },
  
    text: {
      color: 'white'
    },

    logo: {
        width: 66,
        height: 58,
        borderRadius: 8,
        
      },
     
   imgContainer: {
    maxWidth: 70,
    margin: 8,
   },
   
   textContainer: {
       width: '50%',
   }
});
  