export type EpisodeDetailsCrewMember = {
  readonly department: string
  readonly job: string
  readonly credit_id: string
  readonly adult: boolean
  readonly gender: number
  readonly id: number
  readonly known_for_department: string
  readonly name: string
  readonly original_name: string
  readonly popularity: number
  readonly profile_path: string | null
}

export type EpisodeDetailsGuestStar = {
  readonly character: string
  readonly credit_id: string
  readonly order: number
  readonly adult: boolean
  readonly gender: number
  readonly id: number
  readonly known_for_department: string
  readonly name: string
  readonly original_name: string
  readonly popularity: number
  readonly profile_path: string | null
}

export type EpisodeDetails = {
  readonly id: number
  readonly name: string
  readonly overview: string
  readonly air_date: string
  readonly episode_number: number
  readonly production_code: string
  readonly runtime: number
  readonly season_number: number
  readonly still_path: string | null
  readonly vote_average: number
  readonly vote_count: number
  readonly crew: readonly EpisodeDetailsCrewMember[]
  readonly guest_stars: readonly EpisodeDetailsGuestStar[]
}
