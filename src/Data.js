import React from 'react';
import axios from 'axios';

const MyContext = React.createContext();

class MyProvider extends React.Component{
	constructor() {
        super();

        this.state = {
        	listPodcast: [],
            loading: true,
            keyword: null
        };
    }

    // API
	componentDidMount() {
	    axios.get('https://json-server-heroku-svoqwyfacm.now.sh/podcasts')
	    .then(res => {
            const listPodcast = res.data;
            console.log(listPodcast);
            this.setState({ listPodcast });
            this.setState({ 
                loading: false,
            });

	    });

	}

    // search
    findPodcast = (keyword) => {
        this.setState({
            keyword: keyword
        });
    }

    getPodcastData = () => {
        const result = [];
        let self = this;
        if(!this.state.loading){
            this.state.listPodcast.map((listPodcast) => {
                if (self.state.keyword && listPodcast.title.toLowerCase().indexOf(self.state.keyword.toLowerCase()) === -1) 
                    return;
                result.push(listPodcast);
            })
        }
        return result;
    }

    // detail
    findById = (podcastid) => {
        let data = null;
        if(!this.state.loading){
            data = this.state.listPodcast.find( listPodcast => listPodcast.id === parseInt(podcastid));
        }
        return data;
    }

	render() {
        return (
            <MyContext.Provider value={{ 
                state: this.state,
                findById: this.findById,
                loading: this.state.loading,
                searchPodcast: this.getPodcastData(),
                keyword: this.state.keyword,
                find: this.findPodcast,
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
export {
    MyContext,
    MyProvider
}