

function DisplayComponent ({universities, country}) {
    console.log(universities);
    const univCards = ()=>{
        return universities.map((university,index) =>(
            <div key={index} className="university-card">
                <div>
                    {university.name}
                </div>
            </div>
        ))
    }
    return(
        <>
            {
                country? 
                    <>
                    <h1>Universities in {country} ({universities.length})</h1>
                    <div id="universities-container">
                        
                       {univCards()} 
            
                    </div>   
                    </> 
                 :
                    
                <p> Search a country to display universities</p>
            }
        
        </>
    )
}

export default DisplayComponent