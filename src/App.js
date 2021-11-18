import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";
function App() {

  // define category and news
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([])

  useEffect(() => {
    const consultAPI = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=48bcd1f672ea43c2b3e316fe1bdec814`

      const res = await fetch(url)
      const news = await res.json()

      saveNews(news.articles);
    }
    consultAPI()
  }, [category])

  return (
    <Fragment>
      <Header 
          title="News Finder"
      />

      <div className='container blue-grey darken-4'>
        <Form 
          saveCategory={saveCategory}
        />

        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;

