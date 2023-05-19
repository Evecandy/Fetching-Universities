import React, { useState, useEffect } from "react";
import SearchPanel from './SearchPanel';

const App = () => {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    fetch(`http://universities.hipolabs.com/search?country=${country}`)
      .then((response) => response.json())
      .then((data) => setUniversities(data));
  }, [country]);

  return (
    <div>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <UniversitiesList country={country} universities={universities}/>
    </div>
  );
};

const UniversitiesList = ({country, universities}) => {
  const renderCards = () => {
    return universities.map((university, index) => (
      <li key={index}>
        <strong>{university.name}</strong>
        <br />
        {university.location}
      </li>
    ));
  };

  return (
    <div>
      <ul>
        {renderCards()}
      </ul>
    </div>
  );
};
export default App;




