import React from "react";
import './App.css';

const App = () => {

    return (
        <>
            <div className="container">
                <section className="profile">
                    <div id="profile__img" tabindex="1" style={{width:'88px', height:'88px'}}></div>
                    <p id="twitter">Ifeanyi Michael</p>
                    <p id="slack" style={{display:'none'}}>Ifeanyi Iheme</p>
                </section>
                <section className="links">
                    <a href="https://twitter.com/ifeanyimichaell">Twitter Link</a>
                    <a id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
                    <a id="books" href="http://books.zuri.team">zuri Books</a>
                    <a id="book__python" href="https://books.zuri.team/python-for-beginners?U048QNGTGMP=<ifeanyiiheme>">Python Books</a>
                    <a id="pitch" href="backgroundcheck.zuri.team"> Background check for coders</a>
                    <a id="book__design" href="https://books.zuri.team/design-rules ">Design Books</a>
                </section>
            </div>
        </>
    );
}

export default App;
