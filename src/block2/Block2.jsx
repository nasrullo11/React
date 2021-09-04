import './block2.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar} from 'react-bootstrap'
import HashLoader from "react-spinners/HashLoader";
import React, { useEffect, useState } from 'react'

export default function Block2() {
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
        <div className="block2">
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
                <div className="row justify-content-start align-items-center">
                    <div className="col-lg-5">
                        <div className="about_img">
                            <img src="https://preview.colorlib.com/theme/breed2/img/xabout-us.png.pagespeed.ic.zoNGpLzqsH.webp" alt="" />
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <p className="off-text">About me  <span></span></p>
                        <h2>Creative Art Director And Designer</h2>
                        <p>Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face</p>
                        <a href="https://tashkent.hh.uz/resume/064ebbb5ff09144e5f0039ed1f3059434e5353" className="btn">my CV</a>
                    </div>
                </div>
            </Container>
        </div>
        )
        }
        </div>
    )
}
