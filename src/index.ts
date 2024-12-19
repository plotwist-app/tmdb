import axios, { type CreateAxiosDefaults, type AxiosInstance } from 'axios'
import {
  collections,
  credits,
  genres,
  images,
  keywords,
  languages,
  movies,
  search,
  season,
  tv,
  videos,
  watchProviders,
  person,
  episodes,
} from './api'

export let axiosClient: AxiosInstance

export function TMDB(accessToken: string, config?: CreateAxiosDefaults) {
  axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    ...config,
  })

  return {
    collections,
    credits,
    genres,
    images,
    keywords,
    languages,
    movies,
    search,
    season,
    tv,
    videos,
    watchProviders,
    person,
    episodes,
  }
}

export * from './models'
export * from './api'
