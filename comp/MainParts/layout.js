
import Navbar from "./Navbar";

import Maincard from "./MainCard";

import Lay from '../../styles/Layout.module.scss';


const Layout = ({children}) => {
    return ( 
        <div className={Lay.holder}>   
        <Navbar />
            <Maincard>
                    {children}
            </Maincard>
        </div>
     );
}
 
export default Layout;