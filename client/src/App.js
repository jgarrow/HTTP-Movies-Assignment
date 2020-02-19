import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from "./Movies/UpdateMovieForm";
import AddMovieForm from "./Movies/AddMovieForm";

const App = () => {
    const [savedList, setSavedList] = useState([]);
    const [movieToEdit, setMovieToEdit] = useState(null);

    const addToSavedList = movie => {
        setSavedList([...savedList, movie]);
    };

    const handleSetMovieToEdit = movie => {
        setMovieToEdit(movie);
    };

    return (
        <>
            <SavedList list={savedList} />
            <Route
                exact
                path="/"
                render={props => {
                    return (
                        <MovieList
                            handleSetMovieToEdit={handleSetMovieToEdit}
                        />
                    );
                }}
            />
            <Route
                path="/movies/:id"
                render={props => {
                    return (
                        <Movie
                            {...props}
                            addToSavedList={addToSavedList}
                            handleSetMovieToEdit={handleSetMovieToEdit}
                        />
                    );
                }}
            />
            <Route
                path="/update-movie/:id"
                render={props => {
                    return (
                        <UpdateMovieForm
                            {...props}
                            movie={movieToEdit}
                            handleSetMovieToEdit={handleSetMovieToEdit}
                        />
                    );
                }}
            />
            <Route
                path="/add-movie/"
                render={props => {
                    return <AddMovieForm {...props} />;
                }}
            />
        </>
    );
};

export default App;
