import Head from "next/head";
import { useState} from "react";

import useSWR from 'swr'

import Nex from '../../styles/pagesSt/NexR.module.scss'

import TopDR from '../../comp/Web_box/TopDriver_box'
const NextRace = () => {
    
    const [isOpened, setIsOpened] = useState(false);

  



    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://formula-1-standings.p.rapidapi.com/races?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


    console.log(data.results)

   
    const Tracks = data.results
   
    
    
    
    
        const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
      }
    function toggle(i) {
        setIsOpened(wasOpened => !wasOpened);
        const test = i;
        console.log(test)
        return <div>{test}</div>
      }
  


    return ( <>

  
           <Head>

            <title>Downshift | Next Race</title>


            </Head>

<>

        <input className={Nex.inputs} type="search" name="" id="" />


            <div className={Nex.buttonHolder}>
                <button className={Nex.button}>button</button>
                <button className={Nex.button}>button</button>
                <button className={Nex.button}>button</button>
                <button className={Nex.button}> button</button>
            </div>


            <div className={Nex.gird}>
          
            <div className={Nex.gridData}>
            
                        {Tracks.map((Track, i) => (
                                            
                                
                                <div  key={i}>                
                                        <div className={Nex.card} >
                                            <ul className={Nex.List}>
                                                
                                                <li> 
                                              
                                                {Track.race_name}</li>
                                                <br></br>
                                                <li> 
                                                 
                                                {Track.race_date}</li>
                                                <br></br>
                                                {/*<div className={Nex.boxTitle} onClick={() => toggle(Track.track)}>{i} button</div>*/}
                                            </ul>
                                           
                                        </div>
                                    
                                </div>
                            
                                ))}
                            
                    </div>
                        
             <div className={Nex.Sidediv}>
                    <div className={Nex.Bgholder}>
                          <TopDR></TopDR>
                        </div>  

                      


            </div>
            </div>
            </>
           
        
                
     
    
  

      

        </>);
    
}
 
export default NextRace;