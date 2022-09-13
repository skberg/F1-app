
import bg from '../../styles/BG.module.scss'
import TopDriv from '../../styles/comp/Topdriver.module.scss'

import useSWR from 'swr'



const TopDR = () => {


    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://formula-1-standings.p.rapidapi.com/standings/drivers?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b', fetcher)
  
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>




    const  topdriver = data.results;
    console.log(topdriver )
    //if (topdriver === position )




    return ( 

        <div className={TopDriv.bg}> 
            <div className={TopDriv.images}> top driver</div>
            <div className={TopDriv.cont}>
          
                {topdriver.map((f, i) => (
                    <div>
                    {(() => {
                        if ( i === 0){
                            return (
                                <div>
                                <ul>
                                    <li>{f.driver_name}</li>
                                    <li>{f.position}</li>
                                    <li>{f.points}</li>
                                    <li>{f.team_name}</li>
                                    <li>{f.nationality}</li>
                                </ul>
                                
                               
                                
                                </div>
                            
                            )
                        }
                        
                        return null;
                      })()}</div>
              ))}

            </div>
        
        </div>

     );
}
 
export default TopDR;