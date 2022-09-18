import React from "react";

const Artist = ({ artist }) => {
  if (!artist) return null;

  const { images, name, followers, genres } = artist;

  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>genres: {genres.join(", ")}</p>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile-image"
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          objectFit: "cover"
        }}
      />
    </div>
  )
}

export default Artist;
