import React, { useState, useEffect, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";
import { reset } from "./css/reset";
import { Layout } from "./components/Layout";
import { Loader } from "./components/Loader";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import { useSearch } from "./hooks/effects/search";
const Player = lazy(() => import("./components/Player"));

function App() {
  const [magnet, setMagnet] = useState();
  const { query, torrents, loading, setTorrents, setQuery } = useSearch();

  function onSubmitHandler(query) {
    setQuery(query);
  }

  function onClickHandler(magnet) {
    setTorrents([]);
    setMagnet(magnet);
  }

  useEffect(() => {
    setMagnet();
    setTorrents([]);
  }, [query]);

  return (
    <Layout>
      <Global styles={reset} />
      <Search onSubmit={onSubmitHandler} />
      <Loader loading={loading} />
      <Suspense fallback={<Loader loading={true} />}>
        {magnet && <Player magnet={magnet} />}
      </Suspense>
      <Results results={torrents} onClick={onClickHandler} />
    </Layout>
  );
}

render(<App />, document.getElementById("root"));
