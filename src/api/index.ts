import { FormEvent } from "react";
import { GifType } from "../types";
import axios from "axios";

export const handleSearch = async (
  e: FormEvent,
  page: number,
  query: string,
  gifs: GifType[],
  setGifs: React.Dispatch<React.SetStateAction<GifType[]>>
) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  e.preventDefault();
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=${
    page * 25
  }&rating=g&lang=en&bundle=messaging_non_clips`;
  try {
    const response = await axios.get(apiUrl);
    setGifs([
      ...gifs,
      ...response.data.data.map((item: any) => {
        return { label: item.title, url: item.images.fixed_height.url };
      }),
    ]);
  } catch (err) {
    console.log(err);
  }
};
