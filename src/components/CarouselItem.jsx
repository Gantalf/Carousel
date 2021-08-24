import React from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'

export default function CarouselItem({ item }) {

  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nameText: {
      color: '#ffff',
      fontWeight: 'bold',
    },
    tinyLogo: {
      width: 300,
      height: 400,
      resizeMode: 'covert',
      borderRadius: 16
    }
  })


  return (
    <View >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.image[Math.floor(Math.random() * 3)]
          }}
        />

        <Text style={styles.nameText}>{item.title}</Text>
      </View>
    </View>

  )
}

