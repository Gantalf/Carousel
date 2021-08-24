import React from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'

<<<<<<< HEAD
export default function CarouselItem({ item }) {
=======
export default function carouselItem({ item }) {
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4

  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
<<<<<<< HEAD
      width: width,
      justifyContent: 'center',
=======
      backgroundColor: 'rgba(0,0,0, 0.8)',
      borderColor: '#6f6f6f',
      borderWidth: 1,
      padding: 16,
      marginLeft: 5,
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
      alignItems: 'center',
    },
    nameText: {
      color: '#ffff',
      fontWeight: 'bold',
    },
    tinyLogo: {
<<<<<<< HEAD
      width: 300,
      height: 400,
      resizeMode: 'covert',
      borderRadius: 16
    }
  })


  return (
    <View >
      <View style={styles.container}>
=======
      width: 200,
      height: 200,
      margin: 5
    }
  })

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.nameText}>{item.title}</Text>
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.image[Math.floor(Math.random() * 3)]
          }}
        />
<<<<<<< HEAD

        <Text style={styles.nameText}>{item.title}</Text>
=======
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
      </View>
    </View>

  )
}
<<<<<<< HEAD

=======
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
