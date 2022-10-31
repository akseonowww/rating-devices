import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IProduct, ServerResponse } from '../models/models'

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  refetchOnFocus: true,
  endpoints: build => ({
    searchProducts: build.query<IProduct[], string>({
      query: () => ({
        url: `products`
       }
      ),
      transformResponse: (response: ServerResponse<IProduct>) => response.products
    })
  })
})

export const {useSearchProductsQuery} = productsApi