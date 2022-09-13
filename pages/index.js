import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

/*Styling*/

import HomeEments from '../styles/Home.module.scss'
import bg from '../styles/BG.module.scss'


/*Componets*/ 

import NextMainRace from '../comp/Web_box/NextRaceMain_box'
import TopDR from '../comp/Web_box/TopDriver_box'
import News from '../comp/Web_box/News_box'
import Navbutton from '../comp/Web_box/Navbutton_box'
import HeidingBox from '../comp/Web_box/Heding_box'




export default function Home({}) {

 

  return (
    <> 
    <Head>
      <title>Downshift | Home</title>

    </Head>

            
            <div >
              <div className={bg.Topbox}>
              <HeidingBox />
              <TopDR  />
              </div>
             
                <div className={bg.midBox}>
                 <Navbutton />
                </div>
            <div className={bg.BottomBox}>
              <NextMainRace />
              <News />  
              </div>

                
            </div>
       </>
  )
}

    