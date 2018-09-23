import React from 'react';
import axios from 'axios';

class ParkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkName: '',
      alerts: [],
      info: {},
      article: [],
      articleImg: [],
      news: [],
      newsImg: [],
    };
  }

  componentDidMount() {
    this.getAlerts();
    this.getInfo();
    this.getArticles();
    this.getNews()
  }

  getAlerts() {
    axios.get('/api/park/alerts')
      .then((response) => {
        this.setState({
          alerts: response.data.data
        }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getInfo() {
    axios.get('/api/park/info')
      .then((response) => {
        this.setState({
          info: response.data[0],
          parkName: (response.data[0].fullName),
        }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getArticles() {
    axios.get('/api/park/articles')
      .then((response) => {
        this.setState({
          article: response.data[0],
          articleImg: (response.data[0].listingImage),
        }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getNews() {
    axios.get('/api/park/news')
      .then((response) => {
        this.setState({
          news: response.data[0],
          newsImg: (response.data[0].image),
        }, () => this.render());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { parkName } = this.state;
    const { alerts } = this.state;
    const { info } = this.state;
    const { article } = this.state;
    const { articleImg } = this.state;
    const { news } = this.state;
    const { newsImg } = this.state;
    return (
      <div className="parksInfo">
        <h1>{ parkName }</h1>
        <img className="yoseImg" src="https://www.planetware.com/photos-large/USCA/california-yosemite-things-to-do-yosemite-falls.jpg" />
        <h2>Alerts</h2>
        {alerts.map(alert => (
          <div key={alert.id}>
            <p>
              <strong>{alert.title}</strong>
              <br />
              <span>Category: </span>
              {alert.category}
              <br />
              {alert.description}
            </p>
          </div>
        ))}
        <h2>Park Info</h2>
        <div>
          <p>
            {info.description}
            <br />
            <a href={info.url}>Learn More</a>
          </p>
          <p>
            <strong>Directions</strong>
            <br />
            {info.directionsInfo}
            <br />
            <a href={info.directionsUrl}>Driving Directions</a>
          </p>
        </div>
        <h2>Articles</h2>
        <div>
          <p>
            <img src={articleImg.url} />
            <br />
            <strong>{article.title}</strong>
            <br />
            {article.listingDescription}
            <br />
            <a href={article.url}>Read Article</a>
          </p>
        </div>
        <h2>Current News</h2>
        <div>
          <p>
            <img src={newsImg.url} />
            <br />
            <strong>{news.title}</strong>
            <br />
            {news.abstract}
            <br />
            <a href={news.url}>Read Further</a>
          </p>
        </div>
      </div>
    );
  }
}

export default ParkInfo;
