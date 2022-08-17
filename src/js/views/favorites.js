import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const { store, actions } = useContext(Context)

    return (

        <>
            <h1>Favorites</h1>

            <div className="container">
                <div className="row">
                    {store.favorites.map((favorites, id) => {

                        return (
                            <div key={id} className="card bg-dark" style={{ width: '40rem' }}>
                                <div className="col-12">
                                    <div className="card-body">
                                        <h5 className="card-title">Name: {favorites}</h5>
                                        <button onClick={() => actions.deleteFavorite(id)}>
                                            {" "}
                                            X {" "}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )

                    })}


                </div>
            </div>




        </>
    );
}

