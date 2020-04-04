import React from "react";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../../Data";
import Detailpodcast from "./Detailpodcast";

const Detail = () => {
  const { podcastid } = useParams();
  return (
    <MyContext.Consumer>
      {context => (
        <div className="detail-podcast">
          {!context.loading ? (
            <Detailpodcast data={context.findById(podcastid)} />
          ) : (
            <div>Loading</div>
          )}
        </div>
      )}
    </MyContext.Consumer>
  );
};
export default Detail;