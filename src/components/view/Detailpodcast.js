import React from 'react';
import{ 
  Link,
  useParams
} from 'react-router-dom';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Detailpodcast = (data) => {
	const { podcastid } = useParams();
	return(
	    <>
	    <div className="detailpodcast">
    		<div className="image">
                <img src={data.data.thumbnail} />
            </div>
            <div className="description">
                <h3>{data.data.title}</h3>
            	<a href={data.data.url}>{data.data.url}</a>
		        {data.data.episodes.map((audio) => 
	            	<div className="audioContainer" key={audio.id}>
	            		<h5>Episode: {audio.id}</h5>
	            		<AudioPlayer src={audio.audio} />
    				</div>
	            )}
	            <Link className="back" to={`/`}>
		            Kembali
		        </Link>
        	</div>
    	</div>
	    </>
	)
}

export default Detailpodcast;