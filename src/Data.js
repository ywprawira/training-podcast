import React from 'react';
import axios from 'axios';

const MyContext = React.createContext();

class MyProvider extends React.Component{
	constructor() {
        super();

        this.state = {
        	listPodcast: null,
            loading: true,
            keyword: null
        };
    }

    // API
	componentDidMount() {
        if(this.state.listPodcast == null) {
    	    axios.get('https://json-server-heroku-svoqwyfacm.now.sh/podcasts')
    	    .then(res => {
                const dataPodcast = res.data;
                console.log(dataPodcast);
                this.setState({ 
                    listPodcast: dataPodcast,
                    loading: false
                });
	       });
        }
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
                state: this.getPodcastData(),
                findById: this.findById,
                loading: this.state.loading,
                keyword: this.state.keyword,
                find: this.findPodcast
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