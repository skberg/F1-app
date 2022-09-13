

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://formula-1-standings.p.rapidapi.com/standings/drivers?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b')
    const Driver = await res.json()
    const round = await fetch('https://formula-1-standings.p.rapidapi.com/standings/constructors?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b')
    const Races = await round.json()


    return {
      props: {
        Driver,
        Races

      },
    }
  }
 

  
  export function RacTrack ({ Races, Driver, data}){

        console.log(Races)
  
      return(
        <>
           <p>Hello!</p>
          
           {/*
            {Races.map((Results, i) => (
                <div key={i}>
                    
                    <a className={styles.single}>
                        <div className={card.cards}>
                            <ul>
                                <li>{Results.race_name}</li>
                                <li>{Results.race_date}</li>
                                <li>{Results.race_location}</li>
                            </ul>
                        </div>
                    </a>
                </div>
            ))}*/ }
             
        </>   
      )
     

}

export default RacTrack
    
    
    

 
