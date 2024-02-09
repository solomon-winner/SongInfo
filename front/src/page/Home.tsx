
import React from "react";
import  Nav  from "../components/Nav";
import MainSect from "../components/Main";
import FooterSect from "../components/Footer";

const Home:React.FC = () => {
    
    return (
        <div >
            <Nav/>
            <MainSect/>
            <FooterSect/>
        </div>
    )
    
}

export default Home;