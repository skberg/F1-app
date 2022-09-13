import Fotter from "./Footer.js";
import Navbar from "./Navbar";
import bg from '../styles/BG.module.scss'


const Layout = ({children}) => {
    return ( 
        <>
            <div className={bg.cont}>

         
            <Navbar />
                {children}
                </div>
        </>
     );
}
 
export default Layout;