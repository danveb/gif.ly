import { useState } from "react"; 
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import "./App.css"; 

const App = () => {
    const [searchTerm, setSearchTerm] = useState(""); 

    const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY); 
    const fetchGifs = (offset) => gf.search(searchTerm, { offset, limit: 15 });

    const handleChange = (e) => {
        setSearchTerm(e.target.value); 
    };

    return (
        <div className="app">
            <h5>Random GIF Grid</h5>
            <form>
                <label htmlFor="search">Enter Search Term</label>
                <input 
                    id="search"
                    type="text"
                    name="search"
                    value={searchTerm}
                    placeholder="Enter something..."
                    onChange={handleChange}
                />
            </form>
            <Grid width={800} columns={3} fetchGifs={fetchGifs} key={searchTerm} />
        </div>
    )
}

export default App