import React from 'react'
import "./About.css";
import Gift from '../misc/Gift';
import about_img from "../../images/about-image.png"

const About = () => {
    return (
        <React.Fragment>
            <section className="about">
                <h2 className='page-heading'>About Us</h2>
                <div className="about-top">
                    <div className='about-top-1'> 
                        <h3> How does VeRoyalies work?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis est dui. In id justo id orci ullamcorper sollicitudin. Pellentesque eget dui elementum risus posuere 
                            mollis. Vestibulum nisl arcu, maximus sed mi eget, elementum tempor augue. Vestibulum euismod rhoncus leo et pharetra. Suspendisse pellentesque dapibus tortor. Praesent 
                            varius sem purus, non consectetur sapien facilisis quis. Sed euismod tortor diam, ac imperdiet ligula posuere eu. Pellentesque molestie sit amet felis vitae dapibus. 
                            Morbi iaculis lacinia condimentum. Aenean malesuada tempor vulputate. Proin nunc elit, dictum tempor sagittis eu, pharetra porta ligula. Suspendisse at lacus eu elit rutrum 
                            luctus eu eget erat. Donec massa dui, finibus in maximus id, finibus at urna.
                        </p>
                    </div>

                    <p className='about-top-2'>
                        <img src={about_img} className="about-image" alt="A building"/>
                    </p>
                </div>
                <br/>
                <div className='about-bottom'>
                    <div className='about-bottom-1'>
                        <h3>Build your assets, NFT by NFT</h3>
                        <p>
                            Suspendisse et est enim. Sed accumsan tellus sit amet fermentum facilisis. Curabitur in neque at felis tempus hendrerit nec ut orci. Donec eu molestie lorem. Ut turpis ipsum, 
                            sagittis sit amet venenatis eget, blandit quis leo. Curabitur vel velit ornare, dignissim ipsum rhoncus, egestas dolor. Morbi ut velit varius, accumsan ex id, convallis lectus. 
                            Duis hendrerit turpis nec nulla condimentum dapibus. Phasellus ullamcorper augue sit amet sapien posuere, sit amet lacinia quam dictum. Cras lobortis eros quis porttitor vestibulum. 
                            Sed eget sollicitudin libero. Donec dui metus, imperdiet eu magna at, scelerisque commodo eros.
                        </p>
                    </div>

                    <div className='about-bottom-2'>
                        <h3>Real estate investment really is accessible to everyone</h3>
                        <p>
                            Suspendisse et est enim. Sed accumsan tellus sit amet fermentum facilisis. Curabitur in neque at felis tempus hendrerit nec ut orci. Donec eu molestie lorem. Ut turpis ipsum, 
                            sagittis sit amet venenatis eget, blandit quis leo. Curabitur vel velit ornare, dignissim ipsum rhoncus, egestas dolor. Morbi ut velit varius, accumsan ex id, convallis lectus. 
                            Duis hendrerit turpis nec nulla condimentum dapibus. Phasellus ullamcorper augue sit amet sapien posuere, sit amet lacinia quam dictum. Cras lobortis eros quis porttitor vestibulum. 
                            Sed eget sollicitudin libero. Donec dui metus, imperdiet eu magna at, scelerisque commodo eros.
                        </p>
                    </div>
                </div>
                <br/>
                <br/>
                <Gift/>
            </section>
        </React.Fragment>
    )
}

export default About;