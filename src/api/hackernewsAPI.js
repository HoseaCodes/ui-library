
function addNews(req, res) {
    const topStories = {
      url: rootURL + "newstories.json?print=pretty"
    }
    const newsData = [];
    console.log(topStories);
    request(topStories, function (err, repsonse, news) {
      const newsArray = JSON.parse(news);
      newsArray.slice(0, 5).forEach(function (liveFeed) {
        const story = {
          url: `https://hacker-news.firebaseio.com/v0/item/${liveFeed}.json?print=pretty`
        }
        console.log(story);
        request(story, function (err, reposnse, finalCall) {
          if (err) return res.render('/feed')
          const test = JSON.parse(finalCall);
          newsData.push(test);
          console.log(JSON.parse(finalCall));
          console.log(newsData);
          res.redirect('/feed', {
            newsData
          });
        });
      });
    });
  
  }