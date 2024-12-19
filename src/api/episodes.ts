import {
  axiosClient,
  type Credits,
  type GetImagesResponse,
  type GetVideosResponse,
} from '..'

const videos = async (
  seriesId: number,
  seasonNumber: number,
  episodeNumber: number
) => {
  const { data } = await axiosClient.get<GetVideosResponse>(
    `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/videos`
  )

  return data
}

const images = async (
  seriesId: number,
  seasonNumber: number,
  episodeNumber: number
) => {
  const { data } = await axiosClient.get<GetImagesResponse>(
    `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/images`
  )

  return data
}

const credits = async (
  seriesId: number,
  seasonNumber: number,
  episodeNumber: number
) => {
  const { data } = await axiosClient.get<Credits>(
    `/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}/credits`
  )

  return data
}

export const episodes = { videos, images, credits }
