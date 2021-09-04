import React, { useEffect, useState } from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap'
import {Twitter, Telegram, Instagram, SportsBasketball,YouTube, AssignmentIndSharp} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
 
export default function TopBar() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
    
            <div className="loader">
                {loading ? (
                    <HashLoader color={"#9013FE"} loading={loading} size={70} />
                ) : (
                    <section className="block1">
                    <Container>
                    <Navbar>
                        <div className="Navbar d-flex align-items-center">
                            <div className="nav-item">
                                <img src="data:image/webp;base64,UklGRr4DAABXRUJQVlA4TLIDAAAvdcAFEP+FFpIk9RzU+8N8+gwXvoKbSJIcKU/zJ3OYzn6re14xaNtIkjejhXcv5sN1ghwAYCEp3D3btm38XMBdESzlGriXbdv3sm3bDicBznEYePu85xX4ggENAQMcGr94AsNxfxzfuzgGB8Mjtvs791kAAgt9ygDxXgAGFH5xgVn89M4NlnBEJmwBgXunYMYn3nGGVsw3ERzhEwJj+MZg0xYW8YaGmkYFECC8agjXELiqKQSCwAvFe/2X89rZsEIMENJAAQGBYVd7wz++sYAbjOOkzAYUFBRGwSblwgpmpMGjTAKcUQIKCFgCOMM1LjFSJgSxiACGP0xAMNc0BAy4IRhF8J9MDuxBkYTAMj1Q6AMv5cASlkiBV51pfMHAAhZKJ6gCg8RRzQKB8EN1nV2UAwLWAN5Q2LQGgX9MNO1jEW1gTQYoMBzRju17f5Wgtm3bGUm67zhvquqdGtvqsXp6bNu2bdsza8za9s7a+nF5njfZxveI/k8AnB9cu3j62AG0ubevXD59ZM/mtubZ+8K2Nualp6Sdbcvj5x9J20uzcSKmNcnGST5Oq4pJ9DgDbJzosQVMIlYKvfaisgVYvmjutInFIup+LRdR96s5S9cQiOhqYaknbm+/ouzdjY1LFsxuGv/f/0DaAmStOdF3eecN7SDWr1q2YHZT48hSjDFxLlGMMUnOV2IjVySjSrExEUmGDu+/qRwH1qwUhpXhAYAlGUke8h5JJYNjRHpwzGUArEeyonz4rnLyMDatkxpKg18oJWmbDSzJUPriE+XSGRzaoYworcaWhYCkFT77WDmPw/t2KqOBXl06du3rxMyYmCSrTpYkIUVpPqlJTOUCqfbV58pV4MQebRQGD6jX6/U+TmoGiWmaxiQZK6pR1AKZ8v032g2cPeLQMGSg0LmMQFN9tIAfvvtWu3rulDa5sWGoVHfxKlmWBSTDAiG0yOTTmmLkcn5+4nDl8mllDsZo7Z2QD0haKU1jkpFDBseI9ODoEgm//qi88Nxdh4WzMFbrVixz8AD4JKvNiqSHv3/XXsZNbel8TJ+gdOhfLC5QJek3p5hkgn9+U14F7miLgSmNSm8UMiQJBwQkK82mFpKkxZ/K64/x9H1lNTCjSekOJ8fYqUrSU/RIcLSCXgH+kt57C3hGWbsCmKd0aldOACeEJE1zygD8IX0A4OE9aQOAmUo/lBFkKFAj6TUbP0X+X+FT5G8JW5GfKvRAq/3LT0++/vIjAdcvnD66f5cwadzwoYN6otUG" alt="" />
                            </div>
                            <div className="nav-item">
                                <ul className="nav">
                                    <li className="nav-item active">
                                        <Link to="Navbardfg" className="nav-link active">home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="Block2" className="nav-link">about</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="Block3" className="nav-link">portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="Block4" className="nav-link">pages</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="Block5" className="nav-link">blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="Block6" className="nav-link">contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Navbar>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="banner">
                                <h3>Hey There !</h3>
                                <h1>I am nasrullo</h1>
                                <h5>CREATIVE ART DIRECTOR & DESIGNER</h5>
                                <div className="icons">
                                    <a href="#">
                                        <Twitter className="twitter"/>
                                    </a>
                                    <a href="https://t.me/nasrullo_11">
                                        <Telegram className="telegram"/>
                                    </a>
                                    <a href="https://www.instagram.com/_nasrullo__/">
                                        <Instagram className="insta"/>
                                    </a>
                                    <a href="#">
                                        <SportsBasketball className="basket"/>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCbFrOv4WkP4lYVAGGFMYAGQ">
                                        <YouTube className="you"/>
                                    </a>
                                </div>
                                <a href="https://github.com/nasrullo11" className="btn">see my work</a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://preview.colorlib.com/theme/breed2/img/banner/xhome-right.png.pagespeed.ic.9EvmcO3oQb.webp" alt="" />
                        </div>
                        <div className="row justify-content-lg-start justify-content-center">
                        <div className="col-lg-2 col-md-3">
                            <div className="static">
                                <h3>
                                    <span className="counter">15</span>k+
                                </h3>
                                <p>Happy Customer</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="static">
                                <h3>
                                    <span className="counter">12</span>k+
                                </h3>
                                <p>Ticket Solved</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="static">
                                <h3>
                                    <span className="counter">9</span>/10
                                </h3>
                                <p>Average Rating</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <footer>
                    <div id="particles-js"></div><div class="count-particles"> <span class="js-count-particles">--</span> particles </div><script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script><script src="http://threejs.org/examples/js/libs/stats.min.js"></script>
                    </footer>

                    <script>
                    particlesJS("particles-js", {"particles":{"number":{"value":170,"density":{"enable":false,"value_area":4971.865554441929}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7771688619684011,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":144.21690222094043,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"remove"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":121.72854534388323,"size":40,"duration":2,"opacity":0.3002637451815786,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
                    </script>
        
                </Container>
                </section>
                )
                }   
            </div>

            

    )
}
