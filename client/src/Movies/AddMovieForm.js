import React, { useState } from "react";
import axios from "axios";

const AddMovieForm = props => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        director: "",
        metascore: 0,
        stars: []
    });

    const handleChange = e => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        });
    };

    const handleActorChange = e => {
        let actorIndex = -1;
        let updatedStars = [...newMovie.stars];

        if (e.target.name === "star-1") {
            actorIndex = 0;
        } else if (e.target.name === "star-2") {
            actorIndex = 1;
        } else if (e.target.name === "star-3") {
            actorIndex = 2;
        }

        updatedStars[actorIndex] = e.target.value;

        setNewMovie({
            ...newMovie,
            stars: updatedStars
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/movies/", newMovie)
            .then(res => {
                console.log("POST res: ", res);
                props.history.push("/");
            })
            .catch(err => {
                console.log("Error POSTING new movie: ", err);
                props.history.push("/");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="add-title">Title:</label>
            <input
                id="add-title"
                name="title"
                type="text"
                value={newMovie.title}
                onChange={handleChange}
            />
            <label htmlFor="add-director">Director:</label>
            <input
                id="add-director"
                name="director"
                type="text"
                value={newMovie.director}
                onChange={handleChange}
            />

            <label htmlFor="add-metascore">Metascore:</label>
            <input
                id="add-metascore"
                name="metascore"
                type="number"
                value={newMovie.metascore}
                onChange={handleChange}
            />

            <label htmlFor="add-star-1">Actor #1:</label>
            <input
                id="add-star-1"
                name="star-1"
                type="text"
                value={newMovie.stars[0]}
                onChange={handleActorChange}
            />

            <label htmlFor="add-star-2">Actor #2:</label>
            <input
                id="add-star-2"
                name="star-2"
                type="text"
                value={newMovie.stars[1]}
                onChange={handleActorChange}
            />

            <label htmlFor="add-star-3">Actor #3:</label>
            <input
                id="add-star-3"
                name="star-3"
                type="text"
                value={newMovie.stars[2]}
                onChange={handleActorChange}
            />

            <button type="submit">Update movie</button>
        </form>
    );
};

export default AddMovieForm;
