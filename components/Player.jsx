import React from "react";
import { Video } from "./Video";
import { useWebTorrent } from "../hooks/effects/webtorrent";

export const Player = ({ magnet }) => {
  useWebTorrent(magnet);

  return <Video id="stream" controls={true} autoPlay={true} />;
};

export default Player;
