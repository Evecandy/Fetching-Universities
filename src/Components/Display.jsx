

function DisplayComponent ({universities, country}) {
    console.log(universities);
    const univCards = ()=>{
        return universities.map((university,index) =>(
            <div>
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
                    <h1>Universities in {country}</h1>
                    <div id="universities-container">
                        
                       <div>{univCards()}</div> 
            
                    </div>   
                    </> 
                 :
                    
                <p> Search a country to display universities</p>
            }
        
        </>
    )
}

export default DisplayComponent