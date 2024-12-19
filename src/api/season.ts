import {
  axiosClient,
  type Credits,
  type GetImagesResponse,
  type GetVideosResponse,
} from '..'
import type { Language } from '../models/language'
import type { SeasonDetails } from '../models/season'

const details = async (
  seriesId: number,
  seasonNumber: number,
  language: Language
) => {
  const { data } = await axiosClient.get<SeasonDetails>(
    `/tv/${seriesId}/season/${seasonNumber}`,
    {
      params: {
        language,
      },
    }
  )

  return data
}

const videos = async (seriesId: number, seasonNumber: number) => {
  const { data } = await axiosClient.get<GetVideosResponse>(
    `/tv/${seriesId}/season/${seasonNumber}/videos`
  )

  return data
}

const images = async (seriesId: number, seasonNumber: number) => {
  const { data } = await axiosClient.get<GetImagesResponse>(
    `/tv/${seriesId}/season/${seasonNumber}/images`
  )

  return data
}

const credits = async (seriesId: number, seasonNumber: number) => {
  const { data } = await axiosClient.get<Credits>(
    `/tv/${seriesId}/season/${seasonNumber}/credits`
  )

  return data
}

export const season = { details, videos, images, credits }
