import React from "react"
import { SafeAreaView, FlatList, StyleSheet } from "react-native"
import Constants from "expo-constants"
import { Item } from "../molecules/item"
import { $data } from "../model/init"
import { useStore } from "effector-react"

//сам лист вию, это блок где будут нал=ши элементы
export const ListView = () => {
  //подписываемся на изменения сторы дата - тут хранятся страны
  const data = useStore($data)

  //рендерим лист вию
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

//стили для блока
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
})
