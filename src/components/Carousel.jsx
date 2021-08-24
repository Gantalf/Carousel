import React, { useState } from 'react'
import { Text, View, Image, FlatList, StyleSheet, useWindowDimensions, Button, Animated } from 'react-native'
import { data } from '../data';
import CarouselItem from './CarouselItem';

export default function Carousel() {

  const { width } = useWindowDimensions();

  const scrollX = React.useRef(new Animated.Value(0)).current;

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

      <Animated.FlatList
        horizontal={true}
        data={currentTodos}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffSet: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        pagingEnabled={true}
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


