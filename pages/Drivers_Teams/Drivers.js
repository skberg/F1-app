import Head from "next/head";

import Style from '../../styles/pagesSt/Driver.module.scss'
import useSWR from 'swr'





  const Driver = ({}) => {

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://formula-1-standings.p.rapidapi.com/standings/drivers?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>




    const  reaces = data.results;

   
    return (
        <>
            <Head>

                    <title>Downshift | Drivers</title>

    
            </Head>

                <div className={Style.holder}>
                    <div className={Style.TopHolder} >
                        
                        <div>
                            <input className={Style.Input} type="search" name="" id="" />
                        </div>
                    </div>

                    <div className={Style.Middelholder}>
                    <div className={Style.cardgrid}>

                    {reaces.map((Results, i) => (

                        <div  key={i}>
                                               
                                <div className={Style.cardgrid}>
                                    <ul className={Style.cardspacing}>
                                        <li> <a className={Style.text}>Name: </a>{Results.driver_name}</li>
                                        <li> <a className={Style.text}>Position: </a>{Results.position}</li>
                                        <li> <a className={Style.text}>Points: </a> {Results.points}</li>
                                        <li> <a className={Style.text}>Nationality: </a>{Results.nationality}</li>
                                        <li> <a className={Style.text}>Team Name: </a>{Results.team_name}</li>
                                    </ul>
                                
                                </div>
                            
                        </div>
                        ))}

                    </div>
                
                    </div>



                </div>
        
        
        
        
        
        </>



    ) 
        
    
    
    }



 

 
export default Driver;