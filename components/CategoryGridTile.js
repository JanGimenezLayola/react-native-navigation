import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.grid} onPress={props.onSelect}>
      <View style={{ backgroundColor: props.color }}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: '8%',
    height: 150,

  }
})

export default CategoryGridTile
