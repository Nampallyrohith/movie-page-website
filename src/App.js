import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import Header from './pages/Header';
import Popularpage from './pages/PopularPage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieCardDetails from './pages/MovieCardDetails';

class App extends Component {
  state = {
    searchInput: '',
    isMenuOpen: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({isMenuOpen: !prevState.isMenuOpen}))
};

  

  onChangeSearchInput = input => {
    this.setState({searchInput: input})
  };

  render() {
    const {searchInput, isMenuOpen} = this.state
    return (
      <div>
        <Header onChangeSearchInput={this.onChangeSearchInput} isMenuOpen={isMenuOpen} toggleMenu={this.toggleMenu} />
        
            {/* {
              isMenuOpen && (
                <div>
                    <input type='search' onChange={this.searchInputFunc}  />
                    <button type="button" onClick={this.onChangeSearchInput}>Search</button>
                </div>
              )
            } */}
        
        <Routes>
          <Route path='/' element={<Popularpage searchInput={searchInput} />} />
          <Route path='/top-rated' element={<TopRatedPage searchInput={searchInput} />} />
          <Route path='/upcoming' element={<UpcomingPage searchInput={searchInput} />} />
          <Route path='/movies/:id' element={<MovieCardDetails /> } />
        </Routes>
      </div>
    );
  }
};

export default App;
