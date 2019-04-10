import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { Global } from "@emotion/core";

import reset from "./lib/reset";
import Video from "./components/Video";
import Input from "./components/Input";
import Layout from "./components/Layout";
import List, { Item } from "./components/List";

import useSearch from "./lib/effects/search";
import useWebTorrent from "./lib/effects/webtorrent";

function App() {
  const [magnet, setMagnet] = useWebTorrent();
  const { query, torrents, loading, setTorrents, setQuery } = useSearch();

  return (
    <Layout>
      <Global styles={reset} />

      <Input
        defaultValue={query}
        placeholder={"Looking for something?"}
        onBlur={({ target: { value } }) => setQuery(value)}
      />

      {magnet && <Video controls={true} id="stream" />}

      {loading && <h1>Loading</h1>}

      {!loading && (
        <List>
          {torrents.map(({ title, magnet }, i) => (
            <Item
              key={i}
              onClick={() => {
                setTorrents([]);
                setMagnet(magnet);
              }}
            >
              {title}
            </Item>
          ))}
        </List>
      )}
    </Layout>
  );
}

render(<App />, document.getElementById("root"));
