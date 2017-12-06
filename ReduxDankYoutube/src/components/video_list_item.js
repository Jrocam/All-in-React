import React from 'react';

const VideoListItem = ({video}) => {
  //{video} is equal to: const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url
  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">
           <h5>{video.snippet.title}</h5>
           <h9 style={{color:'#939393'}}>{video.snippet.channelTitle}</h9>
          </div>
        </div>
      </div>
    </li>
  ); 
}


export default VideoListItem;