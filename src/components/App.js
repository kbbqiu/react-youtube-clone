import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail'

// Youtube API key
const API_KEY = 'AIzaSyBWQfANXbtQFADgHD5ilToR6mJrl-SQmwQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards');

    this.selectVideo = this.selectVideo.bind(this);
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.selectVideo}
          videos={this.state.videos} />
      </div>
    )
  }

  selectVideo(selectedVideo) {
    this.setState({ selectedVideo })
  }

  videoSearch(term) {
    // Youtube search updates with this.state.videos
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }
}

export default App;