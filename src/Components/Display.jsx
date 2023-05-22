

function DisplayComponent ({universities, country}) {
    console.log(universities);
    const univCards = ()=>{
        return universities.map((university,index) =>(
            <div key={index} className="university-card">
                <div>
                   <p> {university.name}</p>
                    <p>{university.domains}</p>
                    <p>{university.web_pages}</p>
                </div>
{/* name:<span>universities name:</span>
alpha_two_code:<span>alpha_two_code:[0]</span>
country:<span>country:[0]</span> */}
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