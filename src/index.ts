import axios, { type AxiosInstance } from "axios";
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
} from "./api";

export let axiosClient: AxiosInstance;

export function tmdb(key: string) {
	axiosClient = axios.create({
		baseURL: "https://api.themoviedb.org/3",
		headers: {
			Authorization: `Bearer ${key}`,
		},
	});

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
	};
}

export * from "./models";
export * from "./api";
