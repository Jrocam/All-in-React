import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY= 'AIzaSyClGTFqgZT_4-5he9DRPH0R5LFtUOT8NOQ';

//Create a new component
//This component should produce some HTML
const App = () =>{
  return(
    <div>
      <SearchBar />
    </div>
  )
}

//Take this component and put it on the page(DOM)
ReactDOM.render(
  <App/>, document.querySelector('.container')
);