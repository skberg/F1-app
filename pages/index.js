import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'


import HomeEments from '../styles/Home.module.scss'
import card from '../styles/Card.module.scss'
import RaceData from '../comp/RaceData'

export default function Home({}) {

 

  return (
    <div>
  
          

            <div className={HomeEments.cards}>
                <div className={HomeEments.cardgrid}>
                  <div className={HomeEments.s}><p className={HomeEments.Text}>News</p></div>
                  <div className={HomeEments.w}><p className={HomeEments.Text}>Teams</p></div>
                 
                
                </div>
              
              </div>
              <div className={HomeEments.Conentebox}>
                <p className={HomeEments.ConenteboxHeding}>
                up cumming races</p>
                    <div className={HomeEments.CHolder}>
                      <div className={HomeEments.CContet}>1</div>
                      <div className={HomeEments.CContet}>2</div>
                    </div>
              </div>
              <div className={HomeEments.Conentebox}>
                <p className={HomeEments.ConenteboxHeding}>Blogs</p>
              </div>

    </div>
  )
}
