import './About.css';
import ogabt from '../../../../public/Assests/ogabt.jpg';
import Image from 'next/image';
const About = () => {
    return (
        <>
        <div id='about'>
            <div className='d-flex justify-content-center mt-5' style={{ position: "relative" }}>
                <div className='about-header'>
                    <p>&nbsp;</p>
                </div>
                <h1>
                    About Us
                </h1>
                <div className='about-header1'>
                    
                    </div>
            </div>
            <div className='row container-fluid mt-5 mb-5 ' style={{overflow:"hidden"}}>
                <div className='col-md-6 animating'>
                    <div className='blurred'>
                        <div className='ms-4'>
                            <h1 className='pt-5'>Redefining T-Shirt Art – Where Threads Tell a Story</h1>
                            <p className='w- ms-5 fs-5'>Embroidery isn’t just a technique; it’s an expression of creativity, craftsmanship, and timeless beauty. Our vision is to transform T-shirt designs with the elegance of embroidery</p>
                            <h1 className='fs-3'>The idea behind our concept started with a simple question – why should T-shirt designs be limited to prints and paints?</h1>
                            <p className='ms-5 fs-4'>We believe that embroidery brings a unique charm, adding texture, durability, and a handcrafted feel that printed designs simply cannot match.</p>
                            <h1 className='fs-3 '> What Makes Us Different?</h1>
                            <ul className='fs-5 ms-5'>
                                <li>Creativity with a twist – Moving beyond traditional prints, we offer a range of embroidered designs that are unique, elegant, and timeless.</li>
                                <li>Quality that speaks for itself – Our T-shirts are made from premium quality fabric, ensuring a comfortable fit and long-lasting durability.</li>
                                <li>Handcrafted with love – Each design is carefully embroidered by hand, ensuring that every piece is a work of art.</li>
                                <li>Customization at your fingertips – We offer a range of designs that can be customized to suit your style, making each piece truly unique.</li>
                                <li>Quality craftsmanship – Bringing art to life through stitches</li>
                                <li>Eco-friendly approach – No chemical inks, just beautiful threadwork</li>
                                <li>Supporting local artisans – Empowering local talent and preserving traditional craftsmanship</li>
                            </ul>                            
                        </div>
                    </div>
                </div>
                <div className='col-md-6 aboutimganimate' >
                    <div className="about">
                        <Image src={ogabt} alt="Picture of the author" style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;