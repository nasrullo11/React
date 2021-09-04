import React, { useEffect, useState } from 'react'
import './block3.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";

export default function Block3() {
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
        <div className="block3">
            <Container>
            <Navbar>
                <div className="Navbar d-flex align-items-center">
                    <div className="nav-item">
                        <img src="data:image/webp;base64,UklGRr4DAABXRUJQVlA4TLIDAAAvdcAFEP+FFpIk9RzU+8N8+gwXvoKbSJIcKU/zJ3OYzn6re14xaNtIkjejhXcv5sN1ghwAYCEp3D3btm38XMBdESzlGriXbdv3sm3bDicBznEYePu85xX4ggENAQMcGr94AsNxfxzfuzgGB8Mjtvs791kAAgt9ygDxXgAGFH5xgVn89M4NlnBEJmwBgXunYMYn3nGGVsw3ERzhEwJj+MZg0xYW8YaGmkYFECC8agjXELiqKQSCwAvFe/2X89rZsEIMENJAAQGBYVd7wz++sYAbjOOkzAYUFBRGwSblwgpmpMGjTAKcUQIKCFgCOMM1LjFSJgSxiACGP0xAMNc0BAy4IRhF8J9MDuxBkYTAMj1Q6AMv5cASlkiBV51pfMHAAhZKJ6gCg8RRzQKB8EN1nV2UAwLWAN5Q2LQGgX9MNO1jEW1gTQYoMBzRju17f5Wgtm3bGUm67zhvquqdGtvqsXp6bNu2bdsza8za9s7a+nF5njfZxveI/k8AnB9cu3j62AG0ubevXD59ZM/mtubZ+8K2Nualp6Sdbcvj5x9J20uzcSKmNcnGST5Oq4pJ9DgDbJzosQVMIlYKvfaisgVYvmjutInFIup+LRdR96s5S9cQiOhqYaknbm+/ouzdjY1LFsxuGv/f/0DaAmStOdF3eecN7SDWr1q2YHZT48hSjDFxLlGMMUnOV2IjVySjSrExEUmGDu+/qRwH1qwUhpXhAYAlGUke8h5JJYNjRHpwzGUArEeyonz4rnLyMDatkxpKg18oJWmbDSzJUPriE+XSGRzaoYworcaWhYCkFT77WDmPw/t2KqOBXl06du3rxMyYmCSrTpYkIUVpPqlJTOUCqfbV58pV4MQebRQGD6jX6/U+TmoGiWmaxiQZK6pR1AKZ8v032g2cPeLQMGSg0LmMQFN9tIAfvvtWu3rulDa5sWGoVHfxKlmWBSTDAiG0yOTTmmLkcn5+4nDl8mllDsZo7Z2QD0haKU1jkpFDBseI9ODoEgm//qi88Nxdh4WzMFbrVixz8AD4JKvNiqSHv3/XXsZNbel8TJ+gdOhfLC5QJek3p5hkgn9+U14F7miLgSmNSm8UMiQJBwQkK82mFpKkxZ/K64/x9H1lNTCjSekOJ8fYqUrSU/RIcLSCXgH+kt57C3hGWbsCmKd0aldOACeEJE1zygD8IX0A4OE9aQOAmUo/lBFkKFAj6TUbP0X+X+FT5G8JW5GfKvRAq/3LT0++/vIjAdcvnD66f5cwadzwoYN6otUG" alt="" />
                    </div>
                    <div className="nav-item">
                        <ul className="nav">
                            <li className="nav-item active">
                                <Link to="Topbar" className="nav-link active">home</Link>
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
            </Container>
            <Container>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-title">
                            <div className="col-lg-4">
                            <p>OUR SERVICE <span></span></p>
                            <h2>What Service We Offer For You</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="services">
                            <img src="https://preview.colorlib.com/theme/breed2/img/services/xs1.png.pagespeed.ic.MMAP6lBZE8.webp" alt="" />
                            <h4>Web Development</h4>
                            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p>
                            <a href="#" className="primary_btn2 mt-35">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="services">
                            <img src="https://preview.colorlib.com/theme/breed2/img/services/xs2.png.pagespeed.ic.R5TNR3yMzj.webp" alt="" />
                            <h4>UX/UI Design</h4>
                            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p>
                            <a href="#" className="primary_btn2 mt-35">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="services">
                            <img src="https://preview.colorlib.com/theme/breed2/img/services/xs3.png.pagespeed.ic.id_8Jx5Zmp.webp" alt="" />
                            <h4>WP Developing</h4>
                            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p>
                            <a href="#" className="primary_btn2 mt-35">Learn More</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        )
        }
        </div>
    )
}
