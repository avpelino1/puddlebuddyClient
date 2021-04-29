import './App.css';
import TitleBanner from './TitleBanner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TitleBanner/>
      </header>
      <body className="App-body">
        <div className="Description">
          <p>Say hello to your new buddy! This application is designed to always be one step ahead of you on the trail.</p>
          <p>Whether you're hiking, climbing, mountaineering, or just having some fun in the sun, we'll find the right weather for you!</p>
        </div>
        <div className="Locations">
          <div className="Search">
          <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/hurricane_ridge.jpg`} 
     alt="Hurricane Ridge"/>
            <h2>Search Locations by Name</h2>
          </div>
          <div className="View-all">
            <img src=""/>
            <h2>View Terrain Conditions</h2>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
