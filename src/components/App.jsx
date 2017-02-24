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

  render() {
    return (
      <div>
        <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.list} clickvideolist={this.onVideoTitleClick.bind(this)}/>
      </div>
      </div>
   );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
