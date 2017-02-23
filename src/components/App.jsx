class App extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      list: window.exampleVideoData
    };

  }

  render() {
    return (
      <div>
        <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.list}/>
      </div>
      </div>
   );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
