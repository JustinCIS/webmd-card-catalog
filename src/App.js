import React from 'react';
import './App.scss';
import CategoryGroup from './components/CategoryGroup';
import Footer from './components/Footer';

function App() {
  let categories = ['Computers', 'Movies']
  return (
    <React-Fragment>
    <div className="container">
      <h2 className="webmd-logo-label">Logo</h2>
        {
          categories.map((category, key) =>
            <React-Fragment key={key}>
              <h1 className="webmd-label">{category}</h1>
                <CategoryGroup category={category} />
            </React-Fragment>
          )
        }
      </div>
      <Footer/>  
      </React-Fragment>
  );
}

export default App;
