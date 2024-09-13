import { render } from "@testing-library/react";
import { GifList } from "./GifList";
import { GifsMock } from "../../mocks/GifsMock";
describe("GifList", () => {
  it("Renders the list", () => {
    render(<GifList gifs={GifsMock} />);
    expect(<img />).toBeTruthy();
  });
});
