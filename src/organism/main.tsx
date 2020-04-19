import React from "react"
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native"
import Constants from "expo-constants"

const DATA = [
  "Albania",
  "Belarus",
  "Guam",
  "Democratic Republic of the Congo",
  "Italy",
  "Jamaica",
  "Japan",
  "Russia",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe",
]

function Item({ title }: { title: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export const ListView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(_, i) => String(i)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
