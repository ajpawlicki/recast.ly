class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      list: window.exampleVideoData
    };
    
    // this.onVideoTitleClick.bind(this);
  }

  onVideoTitleClick(videoListEntry) {
    // console.log('click worked!');
    this.setState({
      // currentVideo: this.props.videos.video
      currentVideo: videoListEntry
    });
  }

  getYouTubeSearch(query) {
    var options = {};
    options.key = this.props.api;
    options.query = query;

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        currentVideo: videos[0],
        list: videos
      })
    );
  }

  render() {
    return (
      <div>
        <Nav handleYouTubeSearch={this.getYouTubeSearch.bind(this)} />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.list} clickvideolist={this.onVideoTitleClick.bind(this)}/>
      </div>
      </div>
   );
  }

  componentDidMount (key) {
    this.getYouTubeSearch();
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
