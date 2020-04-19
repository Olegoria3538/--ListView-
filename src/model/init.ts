import { createEffect, createStore } from "effector"
import { FetchType } from "../type/"

//стора хранения стран
const $data = createStore<string[]>([])

//получеам странны по апи
const getData = createEffect<void, FetchType, any>({
  handler: async () => {
    const url = `https://namaztimes.kz/ru/api/country?type=json`
    const req = await fetch(url)
    return req.json()
  },
})

//связываем функцию получения апи и сторы
$data.on(getData.done, (_, { result }) => Object.values(result))

getData()

export { $data }
