import React from 'react'
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'

export default function carouselItem({ item }) {

  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: 'rgba(0,0,0, 0.8)',
      borderColor: '#6f6f6f',
      borderWidth: 1,
      padding: 16,
      marginLeft: 5,
      alignItems: 'center',
    },
    nameText: {
      color: '#ffff',
      fontWeight: 'bold',
    },
    tinyLogo: {
      width: 200,
      height: 200,
      margin: 5
    }
  })

  return (
    <View >
      <View style={styles.container}>
        <Text style={styles.nameText}>{item.title}</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.image[Math.floor(Math.random() * 3)]
          }}
        />
      </View>
    </View>

  )
}
