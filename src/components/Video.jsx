import React from "react";

export default function VideoPlayer({about, hero, video}) {
  return (
    <div className="">
      <video 
        src={video}
        controls 
        autoPlay 
        loop 
        muted 
        className={`${about} ${hero} `}
      />
    </div>
  );
}
