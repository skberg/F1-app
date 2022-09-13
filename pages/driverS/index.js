
import styles from '../../styles/Home.module.scss'
import card from '../../styles/Card.module.scss'

//import fsPromises from 'fs/promises';
//import path from 'path'



export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
   
    const round = await fetch('https://formula-1-standings.p.rapidapi.com/standings/drivers?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b')
    const Races = await round.json()
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    /*
    const filePath = path.join(process.cwd(), './F1Drivers.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
*/


    return {
      props: {
        Races,
        //objectData
      },
    }
  }









 


const plane = ({  Races, objectData }) => {
    console.log(Races.results)
    const reaces = Races.results;
    console.log(reaces)
    console.log(objectData)
    
    return ( 
        <>
        <p className={styles.title}></p>
            <div>
                <div className={card.cards}>
                 
              



                    {reaces.map((Results, i) => (
 

                        <div key={i}>
                          
                          
                                <div className={card.cardgrid}>
                                    <ul className={card.cardspacing}>
                                        <li> <a className={card.text}>Name: </a>{Results.driver_name}</li>
                                        <li> <a className={card.text}>Position: </a>{Results.position}</li>
                                        <li> <a className={card.text}>Points: </a> {Results.points}</li>
                                        <li> <a className={card.text}>Nationality: </a>{Results.nationality}</li>
                                        <li> <a className={card.text}>Team Name: </a>{Results.team_name}</li>
                                    </ul>
                                
                                </div>
                           
                        </div>
                    ))}
                        {/*
                    {objectData.map((imges, o) => (

                        <div key={o}>
                        <img src={imges.Image}></img>
                    </div>
                    ))}*/ }
                </div>
            </div>

        </>
     );
}
 
export default plane;