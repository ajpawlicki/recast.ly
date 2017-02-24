var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { 
      videoEmbeddable: true,
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      autoplay: 1
    },
    // look back here
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      if (callback) {
        callback(data.items);
      }

      // data.forEach(function(item) {
      //   callback(item);
      // });
    },
    error: function(data) {
      console.log(data);
    }

  });
};

window.searchYouTube = searchYouTube;
