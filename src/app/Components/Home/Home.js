import Image from 'next/image';
import './Home.css';
import revol from '../../../../public/Assests/revol.png';
const Hom = () => {
    return (
        <>
            <div className="home p-5 container-fluid" id='home' >
                <div className='home-contents p-5 '>
                    {/* <Image src={revol} height={150}/> */}
                    <div className='bgg'>
                        <p>&nbsp;</p>
                    </div>
                    <p style={{width:"900px"}}> Revolutionizing T-Shirt Art with Embroidery
                         –<br/> &nbsp; A Creative Alternative to Paint</p>
                         
                </div>
                <div className='home-banner'>
                    <div className='bgg1'>
                        <p>&nbsp;</p>
                    </div>
                    <p>Bringing creativity and craftsmanship together with intricate embroidery on T-shirts. Explore a new dimension of wearable art.</p>
                    <p className='fw-bold'> Why settle for printed or painted designs when embroidery offers texture, durability, and a unique artistic touch? ⬇️</p>
                    <p>Our concept revolves around using fine embroidery instead of traditional prints to create stunning, long-lasting T-shirt designs</p>
                    <div className='hmb'>
                    <button>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hom;