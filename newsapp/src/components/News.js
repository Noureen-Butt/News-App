import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // article = [
  //   {
  //     source: { id: "ign", name: "IGN" },
  //     author: "Travis Northup",
  //     title:
  //       "Rollerdrome Preview: Extreme Sports Just Got a Whole Lot More Extreme - IGN",
  //     description: null,
  //     url: "https://www.ign.com/articles/rollerdrome-preview-extreme-sports-just-got-a-whole-lot-more-extreme",
  //     urlToImage:
  //       "https://assets-prd.ignimgs.com/2022/07/25/rollerdrome-finalpreview-blogroll-1658781093928.jpg?width=1280",
  //     publishedAt: "2022-07-26T13:00:23Z",
  //     content:
  //       "There are few premises capable of stealing my heart as quickly as Rollerdrome, but after approximately 30 seconds gliding around on rollerskates while shooting enemies in slow motion, I was completel… [+3876 chars]",
  //   },
  //   {
  //     source: { id: "abc-news", name: "ABC News" },
  //     author: "ABC News",
  //     title: "Russia eyes 2024 Paris Olympics despite sports bans",
  //     description:
  //       "Russia is making plans for its athletes to live and compete in the French capital when the Paris Olympics start in 2024 even though many of the country's athletes remain barred from upcoming qualification events because of the war in Ukraine",
  //     url: "https://abcnews.go.com/Sports/wireStory/russia-eyes-2024-paris-olympics-sports-bans-87415227",
  //     urlToImage:
  //       "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
  //     publishedAt: "2022-07-26T12:52:21.7380354Z",
  //     content:
  //       "PARIS -- With two years to go until the Paris Olympics open, Russia is making plans for its athletes to live and compete in the French capital even though many remain barred from upcoming qualificati… [+1707 chars]",
  //   },
  //   {
  //     source: { id: "bleacher-report", name: "Bleacher Report" },
  //     author: null,
  //     title: "⭐ &#x27;The Champions&#x27; Season Finale ⭐",
  //     description:
  //       "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
  //     url: "https://bleacherreport.com/videos/244201-the-champions-season-6-episode-3",
  //     urlToImage: null,
  //     publishedAt: "2022-06-15T17:37:27.3831502Z",
  //     content: null,
  //   },
  //   {
  //     source: { id: "bleacher-report", name: "Bleacher Report" },
  //     author: null,
  //     title: "Live Bradley Beal Interview ",
  //     description:
  //       "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
  //     url: "https://bleacherreport.com/videos/244886-taylor-rooks-x-bradley-beal",
  //     urlToImage: null,
  //     publishedAt: "2022-06-15T17:22:35.1827416Z",
  //     content: null,
  //   },
  //   {
  //     source: { id: "usa-today", name: "USA Today" },
  //     author: null,
  //     title: "Daily Briefing",
  //     description:
  //       "The day's top stories, from sports to movies to politics to world events.",
  //     url: "https://profile.usatoday.com/newsletters/daily-briefing/",
  //     urlToImage:
  //       "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
  //     publishedAt: "2021-08-15T15:35:07+00:00",
  //     content:
  //       "The day's top stories, from sports to movies to politics to world events.",
  //   },
  //   {
  //     source: {
  //       id: "the-washington-times",
  //       name: "The Washington Times",
  //     },
  //     author: "The Washington Times http://www.washingtontimes.com",
  //     title: "Latest Quizzes",
  //     description:
  //       "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
  //     url: "https://www.washingtontimes.com/quiz/",
  //     urlToImage: null,
  //     publishedAt: "2021-02-10T03:52:37.2719772Z",
  //     content:
  //       "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]",
  //   },
  // ];
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `NewsBites - ${this.capitalizeFirstLetter(
  //   props.category
  // )

  const loadItems = async () => {
    props.progress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url);
    props.progress(50);
    let parsedData = await data.json();
    props.progress(70);
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    // setLoading(false);
    props.progress(100);
  };
  useEffect(() => {
    loadItems();
  });

  // const handlePrevClick = async () => {
  //   // console.log("previous");
  //   // this.state.page -= 1;
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d1fa793694344c2993093ff82a18ea4d&page=${this.state.page}&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   article: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   setPage(page - 1);
  //   loadItems();
  // };

  // const handleNextClick = async () => {
  //   // console.log("next");

  //   // this.state.page += 1;
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d1fa793694344c2993093ff82a18ea4d&page=${this.state.page}&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   article: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   setPage(page + 1);

  //   loadItems();
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="mb-2 text-center">
        NewsBites - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {/* <Spinner loading={this.state.loading} /> */}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={
          <h4>
            <Spinner loading={loading} />
          </h4>
        }
      >
        <div className="container">
          <div className="row my-4">
            {article.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    descripton={
                      element.description
                        ? element.description.slice(0, 87)
                        : ""
                    }
                    author={!element.author ? "Unknown" : element.author}
                    date={element.publishedAt}
                    source={
                      !element.source.name ? "Unknown" : element.source.name
                    }
                    imgUrl={
                      !element.urlToImage
                        ? "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-around my-4">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-warning"
            onClick={this.handlePrevClick}
          >
            &#8592; Prev
          </button>
          <button
            type="button"
            className="btn btn-warning"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 6,
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
