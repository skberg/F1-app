import Head from "next/head";
import {Children, useState} from "react";
import NextRaceComp from "../../comp/Web_box/NextRace_box";
import useSWR from 'swr'

import Nex from '../../styles/pagesSt/NexR.module.scss'


const NextRace = () => {
    
    const [isOpened, setIsOpened] = useState(false);

  



    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://f1-race-schedule.p.rapidapi.com/api?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>




    const Tracks = data;

    function toggle(i) {
        setIsOpened(wasOpened => !wasOpened);
        const test = i;
        return <p>{test}</p>
       
      }
  









    return ( <>

  
           <Head>

<title>Downshift | Next Race</title>


</Head>


   
            <div className={Nex.gird}>
            

            {Tracks.map((Track, i) => (
                                  
                    
                    <div  key={i}>                
                            <div className={Nex.card} >
                                <ul >
                                    <li> <a >Name: </a>{Track.race_no}</li>
                                    <li> <a >Position: </a>{Track.track}</li>
                                    <li> <a >Points: </a> {Track.date}</li>
                                
                                </ul>
                                <div className="boxTitle" onClick={() => toggle(Track.track)}>{i} button</div>
                            </div>
                            {isOpened && (
                        <div className={Nex.Sidediv}>
                          <p>{toggle}</p>
                               
                        </div>
                    )}
                    </div>
                 
                    ))}
         
                

            </div>
            <div className="boxTitle" onClick={toggle}>dddddd</div>
           
        
                
     
    
  

      

        </>);
    
}
 
export default NextRace;