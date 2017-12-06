import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY= 'AIzaSyClGTFqgZT_4-5he9DRPH0R5LFtUOT8NOQ'


class App extends Component{
  constructor(props){
    super(props)
    this.state= { videos: []}

    YTSearch(
      { key: API_KEY, term: 'Dank'},
      videos => { this.setState({ videos }) 
    });
  }
  
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

//Take this component and put it on the page(DOM)
ReactDOM.render(
  <App/>, document.querySelector('.container')
);