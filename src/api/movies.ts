import { axiosClient } from '..'
import type { Language } from '../models/language'
import type { Movie, MovieDetails } from '../models/movie'
import type { ListResponse } from '../utils/list-response'

/*
|-----------------------------------------------------------------------------
| Details
| 
| References:
| https://developer.themoviedb.org/reference/movie-details
| 
|-----------------------------------------------------------------------------
*/

const details = async (id: number, language: Language) => {
  const { data } = await axiosClient.get<MovieDetails>(`/movie/${id}`, {
    params: {
      language,
    },
  })

  return data
}

/*
|-----------------------------------------------------------------------------
| Discover movie
| 
| References:
| https://developer.themoviedb.org/reference/discover-movie
| 
|-----------------------------------------------------------------------------
*/

type DiscoverMovieFilters = Partial<
  Record<
    | 'certification'
    | 'certification.gte'
    | 'certification.lte'
    | 'certification_country'
    | 'include_adult'
    | 'include_video'
    | 'language'
    | 'page'
    | 'primary_release_date.gte'
    | 'primary_release_date.lte'
    | 'primary_release_year'
    | 'region'
    | 'release_date.gte'
    | 'release_date.lte'
    | 'sort_by'
    | 'vote_average.gte'
    | 'vote_average.lte'
    | 'vote_count.gte'
    | 'watch_region'
    | 'with_cast'
    | 'with_companies'
    | 'with_crew'
    | 'with_genres'
    | 'with_keywords'
    | 'with_original_language'
    | 'with_people'
    | 'with_release_type'
    | 'with_runtime.gte'
    | 'with_runtime.lte'
    | 'with_watch_providers'
    | 'without_companies'
    | 'without_genres'
    | 'without_keywords'
    | 'year',
    string | number | boolean | null
  >
>

type DiscoverOptions = {
  language: Language
  page: number
  filters: DiscoverMovieFilters
}

const discover = async (options: DiscoverOptions) => {
  const { page, language, filters } = options

  const { data } = await axiosClient.get<ListResponse<Movie>>(
    '/discover/movie',
    {
      params: {
        page,
        language,
        ...filters,
      },
    }
  )

  return data
}

/*
|-----------------------------------------------------------------------------
| Movie lists
| 
| References:
| 1. https://developer.themoviedb.org/reference/movie-now-playing-list
| 2. https://developer.themoviedb.org/reference/movie-popular-list
| 3. https://developer.themoviedb.org/reference/movie-top-rated-list
| 4. https://developer.themoviedb.org/reference/movie-upcoming-list
| 
|-----------------------------------------------------------------------------
*/

type MovieListType = 'popular' | 'now_playing' | 'top_rated' | 'upcoming'
type ListOptions = {
  list: MovieListType
  language: Language
  page: number
}

const list = async (options: ListOptions) => {
  const { list, page = 1, language } = options

  const { data } = await axiosClient.get<ListResponse<Movie>>(
    `/movie/${list}`,
    {
      params: {
        language,
        page,
      },
    }
  )

  return data
}

/*
|-----------------------------------------------------------------------------
| Movie related (similar & recommendations)
| 
| References:
| 1. https://developer.themoviedb.org/reference/movie-recommendations
| 2. https://developer.themoviedb.org/reference/movie-similar
| 
|-----------------------------------------------------------------------------
*/

type MovieRelatedType = 'recommendations' | 'similar'
type RelatedResponse = ListResponse<Movie>

const related = async (
  id: number,
  type: MovieRelatedType,
  language: Language
) => {
  const { data } = await axiosClient.get<RelatedResponse>(
    `/movie/${id}/${type}`,

    {
      params: {
        language,
      },
    }
  )

  return data
}

export const movies = { details, discover, related, list }
export type { DiscoverMovieFilters, MovieListType, MovieRelatedType }
