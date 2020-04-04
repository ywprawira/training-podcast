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
                    {(!context.loading) ? context.state.map((podcast,i) => (
                        <Podcast data={podcast} key={i} />
                    )): <span>Loading...</span> }
                    </div>
                )}
            </MyContext.Consumer>
            </>
        )
    }
}
export default Listpodcast;