import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Youtube API key
const API_KEY = 'AIzaSyBWQfANXbtQFADgHD5ilToR6mJrl-SQmwQ';

// Create new component, should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this componenet's generated HTML and put it on the page

ReactDOM.render(<App />, document.getElementById('root'))