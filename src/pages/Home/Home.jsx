import React from "react"
import Header from "../../containers/Header/Header"
import MenuBarComponent from "../../containers/MenuBar/MenuBarComponent"
import "../Home/Home.scss" 

const HomeComponent = () => {

    return(

        <div className="content-home">
            <Header/>
            <div className="welcome">
                <MenuBarComponent/>
                <div className="main">
                    <section className="welcome-main">
                        <section>
                            <p className="title">Welcome Name!</p>
                        </section>
                        <section>
                            <p>I'm happy to see you!</p>
                            <p>Thanks for helping  me to spread the joy of </p>
                            <p>enjoying a tasty sandwich</p>
                        </section>
                        <section>
                            <img className="signature" src="src/assets/montagu-signature.png" alt="Signature"/>
                            <p>The Earl of Sandwich</p>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent