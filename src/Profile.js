import web from "./Icons/Avatar_share.svg"
import mobile from "./Icons/Avatar_shareb.svg"

const Profile = () => {
    return ( 
        <section className="profile">
            <div id="profile__img" tabindex="1" style={{width:'88px', height:'88px'}}></div>
            <img className="avatar_mobile" src={mobile} alt="nav icon" />
            <img className="avatar_web" src={web} alt="nav icon" />
            <p id="twitter">Ifeanyi Michael</p>
            <p id="slack" style={{display:'none'}}>Ifeanyi Iheme</p>
        </section>
    );
}
 
export default Profile;