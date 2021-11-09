import React from "react";

const VideoCard = ({ embedId }) => {
  return (
    <div className="col">
      <div className="card shadow-sm rounded-0 border-0 video-container">
        <a
          href="#"
          aria-label="Example"
          onClick={(event) => event.preventDefault()}
        >
          <iframe
            style={{
              width: "100%",
            }}
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </a>
      </div>{" "}
    </div>
  );
};

export default VideoCard;
