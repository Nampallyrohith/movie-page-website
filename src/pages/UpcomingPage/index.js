import { Component } from "react"
import ProgressView from "../ProgressView"
import FailureView from "../FailureView"
import CommonList from '../CommonList'


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class UpcomingPage extends Component {
    state = {
        upcomingList: [],
        apiStatus: apiStatusConstants.initial,
        currentPage: 1,
    }

    componentDidMount(){
        this.getUpMovies()
    }

    getUpMovies = async () => {
        this.setState({apiStatus: apiStatusConstants.inProgress})
        const {currentPage} = this.state
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU1ODRhMzRjYTJmNmI1M2Y4YTg4YzFkOWNiYjI4YyIsInN1YiI6IjY2MTU1MzkxMTVhNGExMDE3ZGY4OGQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GeCia3NWkTXMgr6ALg7PMJeTCpuvt-emT7pbVDOlVQU'
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c95584a34ca2f6b53f8a88c1d9cbb28c&language=en-US&page=${currentPage}`
        const options = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: 'GET',
          }
        const response = await fetch(url, options)
        if (response.ok){
            const data = await response.json()
            console.log(data)
            const updatedData = data.results.map(movie => ({
                adult: movie.adult,
                backdropPath: movie.backdrop_path,
                genreIds: movie.genre_ids,
                id: movie.id,
                originalLanguage: movie.original_language,
                originalTitle: movie.original_title,
                overview: movie.overview,
                popularity: movie.popularity,
                posterPath: movie.poster_path,
                releaseDate: movie.release_data,
                title: movie.title,
                video: movie.video,
                voteAverage: movie.vote_average,
                voteCount: movie.vote_count,
            }))
            this.setState({apiStatus: apiStatusConstants.success, upcomingList: updatedData})

        }
        else{
            this.setState({apiStatus: apiStatusConstants.failure})
        }
    }

    onClickNextPage = () => {
        this.setState(prevState => ({currentPage: prevState.currentPage + 1}), () => {
            this.getUpMovies();
        });
    }
    
    onClickPrevPage = () => {
        this.setState(prevState => ({currentPage: prevState.currentPage - 1}), () => {
            this.getUpMovies();
        });
    }

    renderSwitchControls = () => {
        const {apiStatus, upcomingList, currentPage} = this.state
        const {searchInput} = this.props
        let searchResult
        if (searchInput === ''){
            searchResult = upcomingList
        }
        else{
            searchResult = upcomingList.filter(movie => movie.title.toLowerCase() === searchInput.toLowerCase())
        }

        let btn;
        if (currentPage > 1){
            btn = (
                <div className="btn-container">
                    <button className="btn" type="button" onClick={this.onClickPrevPage}>Previous</button>
                    <p>{currentPage}</p>
                    <button className="btn" type="button" onClick={this.onClickNextPage}>Next</button>
                </div>
            )
        }
        else{
            btn = (
            <div className="btn-container">
                <p>{currentPage}</p>
                <button className="btn" type="button" onClick={this.onClickNextPage}>next</button>
            </div>
            )
        }
        switch(apiStatus){
            case apiStatusConstants.success:
                return (
                    <div>
                        <h1 className="heading">Upcoming Movies</h1>
                        <CommonList moviesList={searchResult} />
                        {btn}
                        
                    </div>
                )
                
            case apiStatusConstants.failure:
                return <FailureView />

            case apiStatusConstants.inProgress:
                return <ProgressView />
            default:
                return null
        }
    }
    render(){
        return (
            <div>
                {this.renderSwitchControls()}
            </div>
        )
    }
    
}

export default UpcomingPage