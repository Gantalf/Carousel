<<<<<<< HEAD
import React, { useState } from 'react'
import { Text, View, Image, FlatList, StyleSheet, useWindowDimensions, Button, Animated } from 'react-native'
import { data } from '../data';
import CarouselItem from './CarouselItem';

export default function Carousel() {

  const { width } = useWindowDimensions();

  const scrollX = React.useRef(new Animated.Value(0)).current;

=======
import React, { useState, useEffect, useLocalStorage } from 'react'
import { Text, View, Image, FlatList, StyleSheet, useWindowDimensions, Button } from 'react-native'

import CarouselItem from './CarouselItem';

export default function carousel() {

  let url1 = 'https://images.unsplash.com/photo-1629653403057-68f915377196?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  let url2 = 'https://images.unsplash.com/photo-1629410240133-0c757773762a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

  let url3 = 'https://images.unsplash.com/photo-1629667764072-6e156cd4422c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';

  const data = [{
    title: "Primer bloque",
    image: [url1, url2, url3]
  },
  {
    title: "Segundo bloque",
    image: [url1, url2, url3]
  },
  {
    title: "Tercer bloque",
    image: [url1, url2, url3]
  },
  {
    title: "Cuarto bloque",
    image: [url1, url2, url3]
  },
  {
    title: "Quinto bloque",
    image: [url1, url2, url3]
  }, {
    title: "Sexto bloque",
    image: [url1, url2, url3]
  },
  {
    title: "Septimo bloque",
    image: [url1, url2, url3]
  },
  {
    title: "Octavo bloque",
    image: [url1, url2, url3]
  }, {
    title: "Noveno bloque",
    image: [url1, url2, url3]
  }
  ]

  const { width } = useWindowDimensions();

>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
  const styles = StyleSheet.create({
    container: {
      width: width
    },
    final: {
      backgroundColor: '#61dafb',
      display: 'none'
    },
    containerButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 5
    }
  })

<<<<<<< HEAD

=======
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
  const [state, setState] = useState({
    currentPage: 1,
    todosPerPage: 3,
  });

  const nextClick = () => {
    setState({
      ...state,
      currentPage: state.currentPage + 1
    })
  }

  const prevClick = () => {
    setState({
      ...state,
      currentPage: state.currentPage - 1
    })
  }

  let indexOfLastTodo = (state.currentPage * state.todosPerPage);

  let indexOfFirstTodo = indexOfLastTodo - state.todosPerPage;

  let currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

  let lastPage = Math.ceil(data.length / state.todosPerPage);

  return (
    <View style={styles.container}>
<<<<<<< HEAD

      <Animated.FlatList
        horizontal={true}
        data={currentTodos}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffSet: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        pagingEnabled={true}
=======
      <FlatList
        horizontal={true}
        data={currentTodos}
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
        renderItem={({ item }) => <CarouselItem item={item} />}
      />
      <View style={styles.containerButton}>
        {
          (state.currentPage == 1) ?
            <View>
              {null}
            </View>
            :
            <Button onPress={prevClick} title='Prev' />
        }
        {
          (lastPage == state.currentPage) ?
            <View>
              {null}
            </View>
            :
            <Button onPress={nextClick} title='Next' />
        }
      </View>
    </View>
  )
}
<<<<<<< HEAD


=======
>>>>>>> 11eab6d1e03b77fa9f5a1ca10bbbee04232ed5c4
