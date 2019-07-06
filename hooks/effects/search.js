import { useState, useEffect } from "react";

export function useSearch(text) {
  const [query, setQuery] = useState(text);
  const [loading, setLoading] = useState(false);
  const [torrents, setTorrents] = useState([]);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch("https://torrent-gql.analogic.al", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        query: `query { torrents(query: "${query}", providers: [EXTRATORRENT,TORRENTZ2]) { title magnet peers seeds size }}`
      })
    })
      .then(r => r.json())
      .then(({ data: { torrents } }) => {
        setLoading(false);
        setTorrents(torrents);
      });
  }, [query]);

  return { query, torrents, loading, setTorrents, setQuery };
}
