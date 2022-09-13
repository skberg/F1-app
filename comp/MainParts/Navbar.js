import Link  from "next/link";
import Nav from '../../styles/NAV.module.scss'



const Navbar = () => {
    return ( 
        <div className={Nav.Bg}>

            <div className={Nav.LogoNext}>
                <div>Downshift</div>
            </div>




            <div className={Nav.texttholder}>
            <Link href="/"><a className={Nav.aTags}>home</a></Link>
            <Link href="/NextRace"><a  className={Nav.aTags}>Next Race</a></Link>
            <Link href="/Drivers_Teams/Drivers"><a  className={Nav.aTags}>Drivers</a></Link>
            <Link href="/Standing/StandingTeam"><a  className={Nav.aTags}>Teams Standing</a></Link>
           

            </div>
            <br></br>
            <br></br>
            <div className={Nav.homebutton}>
                <button></button>
            </div>
        </div>


     );
}
 
export default Navbar;