import WebTorrent from "webtorrent";
import { useEffect } from "react";

export function useWebTorrent(magnet) {
  useEffect(() => {
    if (!magnet) return;

    const client = new WebTorrent();

    console.log("adding magnet");
    client.add(
      magnet,
      {
        announce: ["wss://enigmatic-gorge-81634.herokuapp.com/"]
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
        if (err) console.error(err);
        console.log("magnet", magnet, "removed");
        client.destroy(err => {
          if (err) console.error(err);
          console.log("client destroyed");
        });
      });
    };
  }, [magnet]);
}
