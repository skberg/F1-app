import Card from '../../styles/Card.module.scss'

import bg from '../../styles/BG.module.scss'
const Navbutton = () => {
    return ( <>
            
            <div className={bg.midBox}>
            <div className={Card.Cards}>
            
                <div className={Card.Text}>card 1</div>
            </div>
            <div className={Card.Cards}>
                <div className={Card.Text}>card 2</div>
                </div>
            <div className={Card.Cards}>
                <div className={Card.Text}>card 3</div>
                </div>
            <div className={Card.Cards}>
                <div className={Card.Text}>card 4</div>
                </div>
            <div className={Card.Cards}>
                <div className={Card.Text}>card 5</div></div>

            
            </div>
        
    
    </> );
}
 
export default Navbutton;