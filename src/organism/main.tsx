import React from "react"
import { SafeAreaView, FlatList, StyleSheet } from "react-native"
import Constants from "expo-constants"
import { Item } from "../molecules/item"
import { $data } from "../model/init"
import { useStore } from "effector-react"

export const ListView = () => {
  const data = useStore($data)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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
})
