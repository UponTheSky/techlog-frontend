import React from 'react';
import { ArticlesMainPage } from './pages/articles/Articles.main';
import { ArticlesIndividualPage } from './pages/articles/Articles.individual';
import { Main } from './pages/main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <ArticlesIndividualPage /> */}
      <Main />
    </div>
  );
}

export default App;
