import Card from '../../styles/Card.module.scss'
import Link  from "next/link";
import bg from '../../styles/BG.module.scss'
const Navbutton = () => {
    return ( 
    <>
       
            <div className={bg.midBox}>
            <Link href="/NextRace">
                <div className={Card.Cards}>
                    <div className={Card.Text}>Next Race</div>
                </div>
            </Link>
            <Link href="/Drivers_Teams/Drivers">
            <div className={Card.Cards}>
                <div className={Card.Text}>Drivers</div>
            </div>
            </Link>
            <Link href="/Standing/StandingTeam">
            <div className={Card.Cards}>
                <div className={Card.Text}>Team standings</div>
            </div>
            </Link>
            <Link href="">
            <div className={Card.Cards}>
                <div className={Card.Text}>card 4</div>
            </div>
            </Link>
            <Link href="/blog">
            <div className={Card.Cards}>
                <div className={Card.Text}>Blogs</div>
            </div>
               
            </Link>
         
     
            </div>
            </>     
    
    )
}
 
export default Navbutton;