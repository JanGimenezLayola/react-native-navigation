import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/dummy-data';

const renderGridItem = itemData => {
  return (
    <View style={styles.grid}>
      <Text>{itemData.item.title}</Text>
    </View>
  )
}


const CategoriesScreen = props => {

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    flex: 1,
    margin: '8%',
    height: 150
  }
})


export default CategoriesScreen
