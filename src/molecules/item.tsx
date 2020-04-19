import React from "react"
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"

interface ItemType {
  title: string
}

export const Item: React.FC<ItemType> = ({ title }) => {
  return (
    <TouchableOpacity onPress={() => Alert.alert("Страна", title)}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 12,
  },
})
