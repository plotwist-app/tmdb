import { axiosClient } from "..";
import type { Credits } from "../models/credits";
import type { Language } from "../models/language";

export const credits = async (
	variant: "movie" | "tv",
	id: number,
	language: Language,
) => {
	const { data } = await axiosClient.get<Credits>(`/${variant}/${id}/credits`, {
		params: {
			language,
		},
	});

	return data;
};
