import React, { useState, useEffect } from "react";


const SearchPanel = ({ universities }) => {
    const renderCards = () => {

        return (
            <ul>
                {universities.map((university) => (
                    <li key={university.id}>
              
                    <strong>{university.name}</strong>
                    <br />
                    {university.location}
                </li>
                ))}
            </ul>

             );
                }

  
return (
            <div>
                <ul>
                    {renderCards()}
                </ul>
            </div>
        );
};

      

        export default SearchPanel
