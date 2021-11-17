import { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
function App() {
  return (
    <Fragment>
      <Header 
          title="News Finder"
      />

      <div className='container grey darken-3'>
        <Form/>
      </div>
    </Fragment>
  );
}

export default App;

