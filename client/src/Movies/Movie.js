import React from "react";
import axios from "axios";

import MovieCard from "./MovieCard";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        };
    }

    componentDidMount() {
        this.fetchMovie(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchMovie(newProps.match.params.id);
        }
    }

    fetchMovie = id => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res => this.setState({ movie: res.data }))
            .catch(err => console.log(err.response));
    };

    saveMovie = () => {
        const addToSavedList = this.props.addToSavedList;
        addToSavedList(this.state.movie);
    };

    deleteMovie = movie => {
        axios
            .delete(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                console.log("DELETE res: ", res);
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error deleting movie: ", err);
            });
    };

    render() {
        if (!this.state.movie) {
            return <div>Loading movie information...</div>;
        }

        return (
            <div className="save-wrapper">
                <MovieCard
                    movie={this.state.movie}
                    handleSetMovieToEdit={this.props.handleSetMovieToEdit}
                />
                <MdEdit
                    onClick={() => {
                        this.props.handleSetMovieToEdit(this.state.movie);
                        this.props.history.push(
                            `/update-movie/${this.state.movie.id}`
                        );
                    }}
                />
                <FaTrashAlt
                    onClick={() => {
                        this.deleteMovie(this.state.movie);
                    }}
                />
                <div className="save-button" onClick={this.saveMovie}>
                    Save
                </div>
            </div>
        );
    }
}
