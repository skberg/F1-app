import Link  from "next/link";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <p>hey</p>
            </div>
            <Link href="/"><a>home</a></Link>
     
            <Link href="/driverS"><a>Drivers</a></Link>
          
            <Link href="/Teams"><a>Teams</a></Link>
            <Link href="/Blogs"><a>Blogs</a></Link>
    
        </nav>


     );
}
 
export default Navbar;