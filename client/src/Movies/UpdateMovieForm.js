import React, { useState } from "react";

const UpdateMovieForm = ({ movie, handleSetMovieToEdit }) => {
    const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

    const handleChange = e => {
        let actors = [...updatedMovie.actors];
        if (e.target.name === "stars") {
            actors = [...actors, e.target.value];
        }

        setUpdatedMovie({
            ...updatedMovie,
            [e.target.name]: e.target.name === "stars" ? actors : e.target.value
        });
    };

    const handleActorChange = e => {
        let actorIndex = -1;
        let updatedStars = [...updatedMovie.stars];

        if (e.target.name === "star-1") {
            actorIndex = 0;
        } else if (e.target.name === "star-2") {
            actorIndex = 1;
        } else if (e.target.name === "star-3") {
            actorIndex = 2;
        }

        updatedStars[actorIndex] = e.target.value;

        setUpdatedMovie({
            ...updatedMovie,
            stars: updatedStars
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleSetMovieToEdit(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
                id="title"
                name="title"
                type="text"
                value={updatedMovie.title}
                onChange={handleChange}
            />
            <label htmlFor="director">Director:</label>
            <input
                id="director"
                name="director"
                type="text"
                value={updatedMovie.director}
                onChange={handleChange}
            />

            <label htmlFor="metascore">Metascore:</label>
            <input
                id="metascore"
                name="metascore"
                type="number"
                value={updatedMovie.metascore}
                onChange={handleChange}
            />

            <label htmlFor="star-1">Actor #1:</label>
            <input
                id="star-1"
                name="star-1"
                type="text"
                value={updatedMovie.stars[0]}
                onChange={handleActorChange}
            />

            <label htmlFor="star-2">Actor #2:</label>
            <input
                id="star-2"
                name="star-2"
                type="text"
                value={updatedMovie.stars[1]}
                onChange={handleActorChange}
            />

            <label htmlFor="star-3">Actor #3:</label>
            <input
                id="star-3"
                name="star-3"
                type="text"
                value={updatedMovie.stars[2]}
                onChange={handleActorChange}
            />

            <button type="submit">Update movie</button>
        </form>
    );
};

export default UpdateMovieForm;
