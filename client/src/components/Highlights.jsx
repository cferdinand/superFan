import React, { useEffect, useState } from "react";

const Highlights = ({ highlight }) => {
  const YouTube = () => {
    return (
      <div className="video_player_container">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${highlight.id.videoId}`}
          allowFullScreen
        ></iframe>
        <div>
          <p>{highlight.snippet.title}</p>
          <p>{highlight.snippet.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      {highlight !== null ? (
        <YouTube />
      ) : (
        <p>Choose a fixture to view highlights</p>
      )}
    </div>
  );
};

export default Highlights;
