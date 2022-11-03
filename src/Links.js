import github from "./Icons/Social_icon.svg"
import slack from "./Icons/slack.svg"
import { Link } from "react-router-dom";

const Links = () => {
    return ( 
        <div>
            <section className="links">
                <a href="https://twitter.com/ifeanyimichaell">Twitter Link</a>
                <a id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
                <a id="books" href="http://books.zuri.team">zuri Books</a>
                <a id="book__python" href="https://books.zuri.team/python-for-beginners?U048QNGTGMP=<ifeanyiiheme>">Python Books</a>
                <a id="pitch" href="backgroundcheck.zuri.team"> Background check for coders</a>
                <a id="book__design" href="https://books.zuri.team/design-rules ">Design Books</a>
                <Link id="contact" to="/contact">Contact</Link>
            </section>
            <div className="socials">
                <a href="https://app.slack.com/client/T042F7V19Q8/C048VCJGEP5/rimeto_profile/U048QNGTGMP?cdn_fallback=2"><img src={slack} alt="a link to slack profile" /></a>
                <a href="https://github.com/ifeanyiHM"><img src={github} alt="a link to github profile" /></a>
            </div>
        </div>
    );
}
 
export default Links;