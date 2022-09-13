import bg from '../../styles/BG.module.scss'

const Maincard = ({children}) => {
    return (  

        <div className={bg.cont}>
            {children}
        </div>
        
    );
}
 
export default Maincard;


