import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container col-12 col-sm-6 col-lg-2 mb-3 row-gap-2 d-flex flex-column">
      <img className="movie-card-image" alt={title} src={posterPath} />
      <div className="d-flex flex-column mt-2 row-gap-1">
        <h5 className="movie-title m-0">{title}</h5>
        <p className="movie-rating mb-0">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="mt-auto align-self-center">
        <button className="btn btn-outline-success" type="button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
