import '../Slide/Slide.css';
import Img1 from '../../assets/slide/img1.avif';
import Img2 from '../../assets/slide/img2.avif';
import Img3 from '../../assets/slide/img3.jpg';
import Img4 from '../../assets/slide/img4.avif';
import Img5 from '../../assets/slide/img5.png';
import Img6 from '../../assets/slide/img6.avif';
import Img7 from '../../assets/slide/img7.avif';


const Slide = () => {
    return (
        <section className='container1'>
            <h1 className='title'>WHAT'S HOT ?</h1>
            <div className='layout'>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img1} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>Y-3 Fall/Winter 2025</h4>
                        <p>an amber ink story.</p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img2} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>CLOT Collection by Edison Chen</h4>
                        <p>The club is open, for those rewriting the rules.</p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img3} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>adidaas Originals X Willy Chavarria</h4>
                        <p>Iconic Tracksuits reimagined.</p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img4} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>A History of Speed </h4>
                        <p>The new adidas X Mercedes- AMG PETRONAS F1 Silver Arrows Pack. </p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img5} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>ADIZERO EVO SL. FEEL FAST.</h4>
                        <p>EVO SL gives you fast in all aspects of life.</p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img6} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>Fear of God Athletics</h4>
                        <p>Where sport meets sophistication</p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
                <div className="card">
                    <div className='card-img'>
                        <img src={Img7} className='inner-card' alt="" />
                    </div>
                    <div className='details'>
                        <h4>Ready, set, school!</h4>
                        <p>Fet their perfect bags as the go back-to-school</p><br />
                        <button className='shopme'>Shop men</button>
                    </div>

                </div>
            </div>
            

        </section>
    );
}

export default Slide;
