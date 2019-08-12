import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "./utils/api";

import Home from "./pages/home";

export default props => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(state => state.app.isLoaded);
    const [playerName, setPlayerName] = useState(null);

    useEffect(() => {
        dispatch({ type: "SET_LOADED" });

        api.then(api => {
            api
                .getEntry("3MV4dNkxmzuQJJ5rU2v3Q")
                .then(entry => {
                    console.log(entry);
                    entry.fields.nom["en-US"] = "Super spongeBob";
                    return entry.update();
                })
                .then(entry => {
                    console.log(entry);
                });
        });
    }, []);

    const handleClick = () => {};

    if (!isLoaded) return <h1>Loading...</h1>;

    return (
        <div className="app-wrapper">
            <h1>App wrapper</h1>
            <Home />
            {playerName ? `Player name is : ${playerName}` : `Player name is : ...`}
            <button onClick={handleClick} className="block mt-4">
                Change the player name [PUT]
            </button>
        </div>
    );
};