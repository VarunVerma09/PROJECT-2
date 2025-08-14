import '../Nav/Nav.css';
import logo from '../../assets/logo.webp'
import flag from '../../assets/flag.png'
import user from '../../assets/icons/user.svg'
import like from '../../assets/icons/heart.svg'
import { GoSearch } from "react-icons/go";
import bag from '../../assets/icons/shopping-bag.svg'

const Nav = () => {

    return (
        <>
            <section className='.section'>
                <div className='nav-top'><ul>
                    <li>help</li>
                    <li>order & returns</li>
                    <li>gift-cards</li>
                    <li>join adiclub</li>
                    <li><img src={flag} className='flag' alt="" /></li></ul></div>
                <nav>
                    <div className='left'>
                        <img src={logo} className='img' alt="no" />
                    </div>
                    <div className='center'>
                        <ul>
                            <li>MEN</li>
                            <li>WOMEN</li>
                            <li>KIDS</li>
                            <li className='costom'>BACK TO SCHOOL</li>
                            <li className='costom'>SALE</li>
                            <li className='costom'>NEW & TRANDING</li>
                        </ul></div>
                    <div className='right'><input type="text" name="" id="input" /> <GoSearch className='search' />
                    <img src={user} className='icons' alt="user" />
                    <img src={like} className='icons' alt="like" />
                    <img src={bag} className='icons' alt="bag" /></div>
                </nav>
            </section>
        </>
    );
}

export default Nav;
