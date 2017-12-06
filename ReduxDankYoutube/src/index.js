import _ from  'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY= 'AIzaSyClGTFqgZT_4-5he9DRPH0R5LFtUOT8NOQ'


class App extends Component{
  constructor(props){
    super(props)
    this.state= { 
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('Pupperinos')
   
  }
  videoSearch(term){
    console.log(term)
    YTSearch(
      { key: API_KEY, term: term},
      videos => { this.setState({ videos: videos , selectedVideo: videos[0] }) 
    });
  }

  render(){
    const videoSearchDelay =_.debounce((term)=>{this.videoSearch(term)},300)

    return(
      <div>
        <SearchBar onSearchChange= {videoSearchDelay} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    )
  }
}

//Take this component and put it on the page(DOM)
ReactDOM.render(
  <App/>, document.querySelector('.container')
);