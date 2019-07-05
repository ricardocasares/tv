import WebTorrent from "webtorrent";
import { useState, useEffect } from "react";

const client = new WebTorrent();

export function useWebTorrent() {
  const [magnet, setMagnet] = useState();

  useEffect(() => {
    if (!magnet) return;

    console.log("adding magnet");
    client.add(
      magnet,
      {
        announce: ["wss://enigmatic-gorge-81634.herokuapp.com"]
      },
      function(torrent) {
        console.log("magnet added!");
        const file = torrent.files.find(file => file.name.endsWith(".mp4"));

        file.renderTo("#stream");
      }
    );

    return () => {
      console.log("removing magnet", magnet);
      client.remove(magnet, err => {
        console.log("magnet", magnet, "removed");
      });
    };
  }, [magnet]);

  return [magnet, setMagnet];
}

export default useWebTorrent;
