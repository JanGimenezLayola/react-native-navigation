import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity style={styles.grid} onPress={() => {
        props.navigation.navigate('CategoryMeals', {
          categoryId: itemData.item.id
        })
      }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

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
    height: 150,

  }
})


export default CategoriesScreen
