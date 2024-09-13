import { GifType } from "../../types";

export const GifList = ({ gifs }: { gifs: GifType[] }) => {
  return (
    <div>
      {gifs.map((gif, index) => (
        <img src={gif.url} alt={gif.label} key={`${gif.label}-${index}`} />
      ))}
    </div>
  );
};
