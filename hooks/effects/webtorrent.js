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
        announce: [
          "wss://tracker.sloppyta.co",
          "wss://tracker.fastcast.nz",
          "wss://tracker.btorrent.xyz",
          "wss://tracker.webtorrent.io",
          "wss://tracker.openwebtorrent.com"
        ]
      },
      function(torrent) {
        console.log("magnet added!");
        const file = torrent.files.find(file => file.name.endsWith(".mp4"));
        console.log(file);
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
