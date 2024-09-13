import { FormEvent, useState } from "react";
import "./App.css";
import { GifType } from "./types";
import { GifList } from "./components/GifList/GifList";
import { handleSearch } from "./api";
import { Container, Form, Button, Input, Text } from "./styles";
function App() {
  const [query, setQuery] = useState<string>("");
  const [gifs, setGifs] = useState<GifType[]>([]);
  const [page, setPage] = useState<number>(0);

  const initialSearch = (e: FormEvent) => {
    setPage(0);
    handleSearch(e, 0, query, [], setGifs);
  };

  const handleLoadMore = async (e: FormEvent) => {
    setPage(page + 1);
    handleSearch(e, page + 1, query, gifs, setGifs);
  };

  const handleClear = () => {
    setGifs([]);
    setPage(0);
    setQuery("");
  };

  return (
    <Container>
      <Form onSubmit={(e) => initialSearch(e)}>
        <Input
          placeholder="Search for gifs"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button type="submit">Search</Button>
        <Button onClick={handleClear} type="button">
          Clear Results
        </Button>
      </Form>
      <GifList gifs={gifs} />
      {gifs.length > 0 && (
        <Button onClick={(e) => handleLoadMore(e)}>Load more</Button>
      )}
      {gifs.length === 0 && (
        <Text>No Gifs to display... Use the search bar</Text>
      )}
    </Container>
  );
}

export default App;
