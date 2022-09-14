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


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const stuff = await prisma.driver.findMany()
  const stuff2 = await prisma.Teams.findMany()
  return {
    props: { 
      test: stuff,
      jeff: stuff2
    }, // will be passed to the page component as props
  }
}



export default function Home({test,jeff}) {

 
console.log(test)
console.log(jeff)

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

    