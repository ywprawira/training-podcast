import React from 'react';
import { MyContext } from "../../Data";

class Searchbar extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <div  className="search-wrapper">
                        <form id="seach" onSubmit={e => { e.preventDefault(); context.find(e.target.search.value); }}>
                          <fieldset>
                            <div className="field">
                              <input type="text" className="search-field" placeholder="Search..." name="search" />
                            </div>
                            <div className="field action">
                              <button className="button submit" type="submit"> Search </button>
                            </div>
                          </fieldset>
                        </form>
                    </div>
                )}
            </MyContext.Consumer>
        )
    }
}

export default Searchbar;