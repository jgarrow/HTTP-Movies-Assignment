import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, handleSetMovieToEdit }) => {
    const { id, title, director, metascore, stars } = movie;

    return (
        <div className="movie-card">
            {/* <Link
                to={`/update-movie/${id}`}
                onClick={() => handleSetMovieToEdit(movie)}
            >
                <MdEdit />
            </Link> */}
            <h2>{title}</h2>
            <div className="movie-director">
                Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>

            {stars.map(star => (
                <div key={star} className="movie-star">
                    {star}
                </div>
            ))}
        </div>
    );
};

export default MovieCard;
