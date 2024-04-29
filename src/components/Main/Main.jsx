




import "./Main.css"
import HeroImg from "../../assets/HeroImg.png"
import bgImg from "../../assets/bgImg.png"
import FoodImg from "../../assets/food.svg"
import Star from "../../assets/star.svg"




export const Main = () => {
    return (
        <div style={{
            background: ` url(${bgImg}) no-repeat center`
        }}>
            <div className="container main">
                <div className="main-text">
                    <h1>Good Food Us Good Mood</h1>
                    <p>
                        I would think that conserving
                        our natural resources should
                        be a conservative position: Not to
                        waste food, and not to throw away a
                        lot of the food that we buy.
                    </p>
                    <button className="common-btn btn-green">Daftar Sekarang</button>
                    <button className="common-btn btn-gray">About Us</button>
                </div>
                <div className="main-img">
                    <img src={HeroImg} alt="hero-img" />
                    <div className="img-info">
                        <div>
                            <img src={FoodImg} alt="" />
                        </div>
                        <div>
                            <h3>Green Salad Tomato</h3>
                            <p>Tomato</p>
                            {[1, 2, 3, 4, 0].map(star => <img 
                            className={""+Boolean(star)}
                             src={Star} alt="" />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}