import { axiosClient } from "..";

import type { Language } from "../models/language";
import type { MovieWithMediaType } from "../models/movie";
import type { TvSerieWithMediaType } from "../models/tv-series";
import type { PersonWithMediaType } from "../models/person";
import type { ListResponse } from "../utils/list-response";

const multi = async (query: string, language: Language) => {
	const { data } = await axiosClient.get<
		ListResponse<
			MovieWithMediaType | TvSerieWithMediaType | PersonWithMediaType
		>
	>("/search/multi", {
		params: {
			query,
			language,
		},
	});

	return data;
};

export const search = { multi };
