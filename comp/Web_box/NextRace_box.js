import bg from '../../styles/BG.module.scss'
import NexR from '../../styles/comp/NexRace.module.scss'

import useSWR from 'swr'


const NextRaceComp = ({  Races, objectData }) => {


    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://f1-race-schedule.p.rapidapi.com/api?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const Teams = data;
console.log(Teams)

    return (  <>
    <div className={NexR.bg}>
    

    {Teams.map((Results, i) => (
 

            <div  key={i}>
                                    
                    <div >
                        <ul >
                            <li> <a >Name: </a>{Results.race_no}</li>
                            <li> <a >Position: </a>{Results.track}</li>
                            <li> <a >Points: </a> {Results.date}</li>
                           
                        </ul>
                    
                    </div>
                
            </div>
            ))}
    
         

    </div>
    
    
    </>);
}
 
export default NextRaceComp;