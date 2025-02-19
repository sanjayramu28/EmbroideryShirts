'use client'
import './Process.css';
import Designproces from '../../../../public/Assests/Designprocess.jpg';
import processthreads from '../../../../public/Assests/processthreads.jpg';
import processStitching from '../../../../public/Assests/processStitching.jpg';
import processFinish from '../../../../public/Assests/processFinish.jpg';
import whyEmbroidery1 from '../../../../public/Assests/whyEmbroidery1.jpg';
import Image from 'next/image';
const Process = () => {
    return (
        <>
            <div className="process" id='services'>
                <div className='blurred p-4'>
                    <h1 className='d-flex p-3' style={{ justifyContent: "center" }}>Our Process</h1>
                    <h2>The Art Behind Every Stitch – Our Embroidery Process & Techniques:</h2>
                    <p className='ms-5'>From concept to creation, every embroidered design follows a meticulous process that blends craftsmanship with creativity.</p>
                    <h1>Our Step-by-Step Process:</h1>
                    <ol>
                        <p>1. Designing the Artwork</p>
                        <div className='row'>
                            <ul className='col-md-7 ms-5'>
                                <li>Every embroidered T-shirt starts with a concept.</li>
                                <li>Our team of designers creates unique patterns and sketches that are transformed into beautiful embroidered designs.</li>
                                <li>Digital tools or hand-drawn sketches are used to plan the embroidery pattern</li>
                            </ul>
                            <div className='col-md-4 d-flex justify-content-center h-100 align-items-center'>
                                <Image src={Designproces} alt="Design Process" className='design-img' />
                            </div>
                        </div>
                        <hr />

                        <div className='row'>
                            <div className='col-md-6 d-flex justify-content-center  align-items-center'>
                                <Image src={processthreads} alt="Process Threads" className='design-img' />
                            </div>
                            <div className='col-md-6'>
                                <p>
                                    2.Selecting Threads & Fabrics
                                </p>
                                <ul>
                                    <li>Choosing the right thread colors and fabric types is essential.</li>
                                    <li>We use high-quality cotton, polyester, and silk threads for durability.</li>
                                    <li>Fabrics are selected to ensure the best embroidery results.</li>
                                    <li>Our team of experts ensures that the thread and fabric colors are perfectly matched.</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-7'>
                                <p >3. Stitching Process – Bringing Designs to Life</p>
                                <p className='ms-3'>Depending on the design complexity, we use:</p>
                                <ul className='ms-5'>
                                    <li>Hand Embroidery – Perfect for intricate, one-of-a-kind designs</li>
                                    <li>Machine Embroidery – Ideal for large-scale production</li>
                                    <li>Computerized Embroidery – Ensures precision and consistency</li>
                                    <li>Our skilled artisans use a variety of stitches, including satin, chain, and cross-stitch, to create stunning embroidered designs.</li>
                                    <li>Each stitch is carefully placed to ensure the design is accurate and visually appealing.</li>
                                    <li>Our team pays close attention to detail to ensure that every embroidered design meets our high standards of quality.</li>
                                </ul>
                            </div>
                            <div className='col-md-4 d-flex justify-content-center  align-items-center'>
                                <Image src={processStitching} alt="Process Stitching" className='design-img' />
                            </div>
                        </div>
                        <hr />
                        <div className='row'>
                            <div className='col-md-5 d-flex justify-content-center  align-items-center'>
                                <Image src={processFinish} alt="Process Finish" className='design-img' />
                            </div>
                            <div className='col-md-7'>
                                <p> 4. Finishing Touches & Quality Check</p>
                                <ul>
                                    <li>Excess threads are trimmed, and the fabric is checked for smoothness.</li>
                                    <li>The final embroidered T-shirt undergoes a quality check to ensure precision and durability.</li>
                                    <li>We ensure that the embroidery remains intact, vibrant, and long-lasting.</li>
                                    <li>Our team of experts inspects each embroidered design to ensure that it meets our high standards of quality.</li>
                                    <li>Once the quality check is complete, the embroidered T-shirt is ready for delivery.</li>
                                    <li>Our team takes pride in delivering beautifully embroidered designs that exceed our customers' expectations.</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </ol>
                    <div>
                    <h1 className='d-flex justify-content-center'>Why Choose Embroidery?</h1>
                    <div className='row'>

                    <ol className='col-md-7'>
                        <h1> 1. Long-Lasting & Durable</h1>
                        <ul className='ms-3'>
                            <li>Unlike printed designs that may fade, crack, or peel over time, embroidery remains intact and vibrant for years.</li>
                            <li>Thread-based designs withstand washing, stretching, and daily wear better than ink-based prints.</li>
                        </ul>
                        <h1>2. Unique Texture & Premium Look</h1>
                        <ul className='ms-3'>
                            <li>Embroidery gives T-shirts a 3D texture, making the designs feel as good as they look.</li>
                            <li>Adds a luxurious, handcrafted touch that elevates any T-shirt.</li>
                        </ul>
                        <h1>
                        3. Eco-Friendly & Sustainable
                        </h1>
                        <ul className='ms-3'>
                            <li>Unlike screen printing, which uses chemical inks, embroidery relies on threads and needles, making it a safer and more sustainable option.</li>
                            <li>No harmful dyes, no fading ink, and minimal waste.</li>
                        </ul>
                        <h1>4. Custom & Artistic Appeal</h1>
                        <ul className='ms-3'>
                            <li>Every embroidered design has a handcrafted feel, making each piece one-of-a-kind.</li>
                            <li>Unlike generic prints, embroidery allows for intricate detailing, rich colors, and artistic depth.</li>
                        </ul>
                        <h1>5. No Cracking, Peeling, or Fading</h1>
                        <ul className='ms-3'>
                            <li>Printed T-shirts may lose vibrancy over time, but embroidery maintains its rich color and texture.
                                <li>Perfect for long-term wear, making it ideal for fashion, branding, and personal expression.</li>
                            </li>
                        </ul>
                    </ol>
                    <div className='col-md-5'>
                        <Image src={whyEmbroidery1} alt="Why Embroidery" className=' w-100 h-100' />  
                    </div>
                    </div>
                    </div>
                </div>
                {/* <p>Process</p> */}
            </div>
        </>
    )
}

export default Process;