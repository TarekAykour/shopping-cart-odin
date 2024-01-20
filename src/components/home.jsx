import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Home(){
    const histroy = useHistory()

    return(
        <div className="home">
            
            <div className="cat clothes" onClick={()=> {histroy.push('/shop')}}>
                <h3>clothes</h3>
            </div>
            
            <div className="other-cats">
                <div className="cat men" onClick={()=> {histroy.push('/shop')}}>
                    <h3>Men</h3>
                </div>
                <div className="cat women-kids" onClick={()=> {histroy.push('/shop')}}>
                    <h3>Women & Kids</h3>
                </div>
            </div>
        </div>
    )
}


export default Home;