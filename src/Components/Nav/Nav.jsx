import '../Nav/Nav.css';
import logo from '../../assets/logo.webp'
import flag from '../../assets/flag.png'
import user from '../../assets/icons/user.svg'
import like from '../../assets/icons/heart.svg'
import { GoSearch } from "react-icons/go";
import bag from '../../assets/icons/shopping-bag.svg'
import Img7 from '../../assets/slide/img7.avif';
import Img3 from '../../assets/slide/img3.jpg';
import disney from '../../assets/slide/disney.jpeg'
import marvel from '../../assets/slide/marvel.jpeg'
import starwar from '../../assets/slide/starwar.png'


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
                            <li>MEN
                                <div>
                                    <section><h3>featured</h3>
                                        <ul>
                                            <li>New Arvals </li>
                                            <li>Adidas Sportswear</li>
                                            <li>Online Exclusive</li>
                                        </ul>
                                        <img src={Img3} alt="" />
                                        <ul>
                                            <h3>never out of style</h3>
                                            <li>Persnolisable product</li>

                                        </ul>
                                    </section>
                                    <section><h3>footwear</h3>
                                        <ul>
                                            <li>Running</li>
                                            <li>Walking</li>
                                            <li>Originals</li>
                                            <li>Sneakers</li>
                                            <li>Slides</li>
                                            <li>Sandals</li>
                                            <li>Gym & Training</li>
                                            <li>Tennis</li>
                                            <li>Basketball</li>
                                            <li>Slippers-Flip_Flops</li>
                                            <li>Football</li>
                                            <li>Swim</li>
                                        </ul>

                                    </section>  <section><h3>cloathing</h3>
                                        <ul>
                                            <li>T-shirts & Tops</li>
                                            <li>Shorts</li>
                                            <li>Tights & Leggings</li>
                                            <li>Sports Bras</li>
                                            <li>Skirts & Dresses</li>
                                            <li>Originals</li>
                                            <li>Cricket Jerseys & Pants</li>
                                            <li>Joggers & Track Pants</li>
                                            <li>Swimwear</li>
                                            <li>Sweatshirts</li>
                                            <li>Tracksuits</li>
                                            <li>Hoodies</li>
                                            <li>Jackets</li>
                                        </ul>


                                    </section>  <section><h3>accescories</h3>
                                        <ul>
                                            <li>Socks</li>
                                            <li>Caps & Headwear</li>
                                            <li>All Bags</li>
                                            <li>Shoulder Bags</li>
                                            <li>Gym & Training Bags</li>
                                            <li>Backpacks</li>
                                            <li>Gloves & Scarves</li>
                                            <li>Balls</li>
                                        </ul>

                                    </section>  <section><h3>sports</h3>
                                        <ul>
                                            <li>Running</li>
                                            <li>Gym & Training</li>
                                            <li>Hiking & Outdoor</li>
                                            <li>Cricket</li>
                                            <li>Tennis</li>
                                            <li>Swim</li>
                                            <li>Football</li>
                                            <li>Yoga</li>
                                            <li>Basketball</li>
                                            <li>Golf</li>
                                            <li>Walking</li>
                                        </ul>
                                        <h3>SUSTAINABLE MATERIALS</h3>
                                        <ul>
                                            <li>Made with Recycled Material</li>
                                            <li>Vegan</li>
                                            <li>Organic Cotton</li>
                                        </ul>



                                    </section>  <section><h3>SPERSTAR</h3>
                                        <img src={Img7} alt="" />
                                    </section>


                                </div>
                            </li>
                            <li>WOMEN
                                <div>
                                    <section><h3>featured</h3>
                                        <ul>
                                            <li>New Arvals </li>
                                            <li>Adidas Sportswear</li>
                                            <li>Online Exclusive</li>
                                        </ul>
                                        <img src={Img3} alt="" />
                                        <ul>
                                            <h3>never out of style</h3>
                                            <li>Persnolisable product</li>

                                        </ul>
                                    </section>
                                    <section><h3>footwear</h3>
                                        <ul>
                                            <li>Running</li>
                                            <li>Walking</li>
                                            <li>Sneakers</li>
                                            <li>Slides</li>
                                            <li>Sandals</li>
                                            <li>Gym & Training</li>
                                            <li>Originals</li>
                                            <li>Football</li>
                                            <li>Slippers - Flip Flops</li>
                                            <li>Cricket</li>
                                            <li>Basketball</li>
                                            <li>Tennis</li>
                                            <li>Skateboarding</li>
                                            <li>Swim</li>
                                            <li>Hiking & Outdoor</li>
                                        </ul>

                                    </section>  <section><h3>cloathing</h3>
                                        <ul>
                                            <li>T-Shirts & Polo</li>
                                            <li>Shorts</li>
                                            <li>Joggers & Track Pants</li>
                                            <li>Originals</li>
                                            <li>Football Jerseys & T-Shirts</li>
                                            <li>Cricket Jerseys & Pants</li>
                                            <li>Swimwear</li>
                                            <li>Jackets</li>
                                            <li>Sweatshirts</li>
                                            <li>Tracksuits</li>
                                            <li>Hoodies</li>
                                        </ul>

                                    </section>  <section><h3>accescories</h3>
                                        <ul>
                                            <li>Socks</li>
                                            <li>Caps & Headwear</li>
                                            <li>All Bags</li>
                                            <li>Gym & Training Bags</li>
                                            <li>Backpacks</li>
                                            <li>Gloves</li>
                                            <li>Balls</li>
                                        </ul>

                                    </section>  <section><h3>sports</h3>
                                        <ul>
                                            <li>Running</li>
                                            <li>Gym & Training</li>
                                            <li>Football</li>
                                            <li>Cricket</li>
                                            <li>Tennis</li>
                                            <li>Basketball</li>
                                            <li>Hiking & Outdoor</li>
                                            <li>Swim</li>
                                            <li>Skateboarding</li>
                                            <li>Golf</li>
                                            <li>Yoga</li>
                                            <li>Walking</li>
                                        </ul>
                                        <h3>SUSTAINABLE MATERIALS</h3>
                                        <ul>
                                            <li>Made with Recycled Material</li>
                                            <li>Vegan</li>
                                            <li>Organic Cotton</li>
                                        </ul>



                                    </section>  <section><h3>SPERSTAR</h3>
                                        <img src={Img7} alt="" />
                                    </section>


                                </div>
                            </li>
                            <li>KIDS
                                <div>
                                    <section>
                                        <h3>featured</h3>
                                        <ul>
                                            <li>Online Exclusives</li>
                                            <li>Sportswear</li>
                                            <li>Football</li>
                                        </ul>
                                        <ul>
                                            <h3>Personalizable Products</h3>
                                            <li>Outlet</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>DISNEY</h3>
                                        <img src={disney} alt="Disney" />
                                        <h3>YOUTH 8 - 16 YEARS</h3>
                                        <ul>
                                            <li>Boys Shoes</li>
                                            <li>Girls Shoes</li>
                                            <li>Boys Clothing</li>
                                            <li>Girls Clothing</li>
                                            <li>Accessories</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>STAR WARS</h3>
                                        <img src={starwar} alt="Star Wars" />
                                        <h3>KIDS 4 - 8 YEARS</h3>
                                        <ul>
                                            <li>Boys Shoes</li>
                                            <li>Girls Shoes</li>
                                            <li>Boys Clothing</li>
                                            <li>Girls Clothing</li>
                                            <li>Accessories</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>MARVEL</h3>
                                        <img src={marvel} alt="Marvel" />
                                        <h3>TODDLERS 0 - 4 YEARS</h3>
                                        <ul>
                                            <li>Shoes</li>
                                            <li>Clothing</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>SPORTS</h3>
                                        <ul>
                                            <li>Football</li>
                                            <li>Running</li>
                                            <li>Swimming</li>
                                            <li>Cricket</li>
                                            <li>Basketball</li>
                                            <li>Tennis</li>
                                            <li>Training</li>
                                        </ul>
                                    </section>
                                </div>

                            </li>
                            <li className='costom'>BACK TO SCHOOL
                                <div>
                                    <section>
                                        <h3>Back to School - Footwear</h3>
                                        <ul>
                                            <li>Classic Sneakers</li>
                                            <li>Running Shoes</li>
                                            <li>Slip-on Shoes</li>
                                            <li>School Sports Shoes</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Back to School - Clothing</h3>
                                        <ul>
                                            <li>Polo T-Shirts</li>
                                            <li>Track Pants</li>
                                            <li>Hoodies</li>
                                            <li>Lightweight Jackets</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Back to School - Accessories</h3>
                                        <ul>
                                            <li>Backpacks</li>
                                            <li>Lunch Bags</li>
                                            <li>Water Bottles</li>
                                            <li>Caps & Headwear</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Back to School - Sports</h3>
                                        <ul>
                                            <li>Football Gear</li>
                                            <li>Basketball Shoes</li>
                                            <li>Cricket Bats & Jerseys</li>
                                            <li>Training Equipment</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Back to School - Essentials</h3>
                                        <ul>
                                            <li>Socks</li>
                                            <li>Stationery Pouches</li>
                                            <li>Rain Jackets</li>
                                            <li>School Uniform Basics</li>
                                        </ul>
                                    </section>
                                </div>

                            </li>
                            <li className='costom'>SALE
                                <div>
                                    <section><h3>men</h3>
                                        <ul>
                                            <li>All Men's</li>
                                            <li>Footwear</li>
                                            <li>Clothing</li>
                                            <li>Accessories</li>
                                        </ul>


                                    </section>
                                    <section><h3>women</h3>
                                        <ul>
                                            <li>All Women's</li>
                                            <li>Footwear</li>
                                            <li>Clothing</li>
                                            <li>Accessories</li>
                                        </ul>


                                    </section>
                                    <section><h3>kids</h3>
                                        <ul>
                                            <li>All Kids</li>
                                            <li>Footwear</li>
                                            <li>Clothing</li>
                                            <li>Accessories</li>
                                        </ul>


                                    </section>
                                    <section><h3>shop by price</h3>
                                        <ul>
                                            <li>Shoes Under ₹2000</li>
                                            <li>Clothing under ₹2000</li>
                                            <li>Shoes Under ₹3000</li>
                                            <li>Shoes Under ₹5000</li>
                                        </ul>


                                    </section>
                                </div>
                            </li>
                            <li className='costom'>NEW & TRANDING
                                <div>
                                    <section>
                                        <h3>Trending in Men</h3>
                                        <ul>
                                            <li>Running Shoes</li>
                                            <li>Sneakers</li>
                                            <li>Tracksuits</li>
                                            <li>Hoodies</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Trending in Women</h3>
                                        <ul>
                                            <li>Sports Bras</li>
                                            <li>Tights & Leggings</li>
                                            <li>Sneakers</li>
                                            <li>Jackets</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Trending in Kids</h3>
                                        <ul>
                                            <li>Boys Shoes</li>
                                            <li>Girls Shoes</li>
                                            <li>Football Jerseys</li>
                                            <li>Backpacks</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Trending in Sports</h3>
                                        <ul>
                                            <li>Football Boots</li>
                                            <li>Basketball Shoes</li>
                                            <li>Cricket Jerseys</li>
                                            <li>Training Gear</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h3>Trending Accessories</h3>
                                        <ul>
                                            <li>Caps & Headwear</li>
                                            <li>Gym Bags</li>
                                            <li>Wristbands</li>
                                            <li>Socks</li>
                                        </ul>
                                    </section>
                                </div>

                            </li>
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
