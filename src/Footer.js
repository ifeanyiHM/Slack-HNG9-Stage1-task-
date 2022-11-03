import zuri from "./Icons/Zuri.Internship_Logo.svg";
import world from "./Icons/I4G.svg";

const Footer = () => {
    return ( 
        <div className='Footer'>
            <img src={zuri} alt="zuri internship" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={world} alt="impressive for good" />
        </div>
    );
}
 
export default Footer;