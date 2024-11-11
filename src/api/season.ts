import { axiosClient } from "..";
import type { Language } from "../models/language";
import type { SeasonDetails } from "../models/season";

const details = async (
	seriesId: number,
	seasonNumber: number,
	language: Language,
) => {
	const { data } = await axiosClient.get<SeasonDetails>(
		`/tv/${seriesId}/season/${seasonNumber}`,
		{
			params: {
				language,
			},
		},
	);

	return data;
};

export const season = { details };
