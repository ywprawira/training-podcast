import React from "react";
import { MyContext } from "../../Data";
import Podcast from "./Podcast";

class Listpodcast extends React.Component {
    render() {
        return (
            <>
            <MyContext.Consumer>
                {context => (
                    <div className="podcast-container">
                    {context.state.listPodcast.map((podcast,i) => (
                        <Podcast data={podcast} key={i} />
                    ))}
                    </div>
                )}
            </MyContext.Consumer>
            </>
        )
    }
}
export default Listpodcast;