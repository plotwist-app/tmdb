import { axiosClient } from "..";
import type { GetGenresResponse } from "../models/genres";
import type { Language } from "../models/language";

export const genres = async (type: "movie" | "tv", language: Language) => {
	const { data } = await axiosClient.get<GetGenresResponse>(
		`/genre/${type}/list`,
		{
			params: {
				language,
			},
		},
	);

	return data;
};
