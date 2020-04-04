import React from "react";
import{ 
  Link,
  useRouteMatch
} from 'react-router-dom';

function Podcast(props) {
    const match = useRouteMatch();
    return (
        <div className="App">
            <div className="image">
                <img src={props.data.thumbnail} />
            </div>
            <div className="description">
                <h3>{props.data.title}</h3>
                <a href={props.data.url}>{props.data.url}</a>
                <Link className="back" to={`/podcast/${props.data.id}`}> 
                    Lihat
                </Link>
            </div>
        </div>
    );
}

export default Podcast;