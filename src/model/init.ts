import { createEffect, createStore } from "effector"
import { FetchType } from "../type/"

const $data = createStore<string[]>([])

const getData = createEffect<void, FetchType, any>({
  handler: async () => {
    const url = `https://namaztimes.kz/ru/api/country?type=json`
    const req = await fetch(url)
    return req.json()
  },
})
$data.on(getData.done, (_, { result }) => Object.values(result))

getData()

export { $data }
