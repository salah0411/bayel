
import './Footer.css'
import FooterLogo from '../../assets/logo.svg'
import game from '../../assets/game.svg'


const menuFooter = [
    "Cupcake",
    "Pizza",
    "Kebab",
    "Salmon",
    "Dougnut",
];
const aboutFooter = [
    "About Us",
    "FAQ",
    "Report Problem",
]

const Footer = () => {
    return (
        <>
            <div className='footer-bg'>
                <section className="container footer">
                    <div>
                        <div className='footer-logo'>
                            <img src={FooterLogo} alt="" />
                        </div>
                        <div className='footer-p'>
                            <p>
                                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi,
                                Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
                            </p>
                        </div>
                        <div className='footer-bottom'>
                            <img src={game} alt="" />
                        </div>
                    </div>
                    <div className='footer-cate'>
                        <h3>Categories</h3>
                        <ul>
                            {menuFooter.map((beg) => {
                                return (
                                    <li>
                                        <a href="">{beg}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div style={{ marginLeft: '115px', marginRight: '103px' }}>
                        <div className='footer-cate'>
                            <h3>About Us</h3>
                            <ul>
                                {aboutFooter.map((bag) => {
                                    return (
                                        <li>
                                            <a href="">{bag}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='footer-left'>
                        <h3>Newsletter</h3>
                        <p>Get now free 50% discount for alll
                            products on your first order</p>
                        <div className='footer-left-input'>
                            <input type="text" placeholder="Your email address" />
                            <button>SEND</button>
                        </div>
                        <div>
                            <div className='icon-email'>
                                <i className="bi bi-envelope"></i>
                                <p> elemesid@gmail.com</p>
                            </div>
                            <div className='icon-phone'>
                                <i className="bi bi-telephone"></i>
                                <p> 0888 1111 2222 </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer
