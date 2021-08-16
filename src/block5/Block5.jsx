import React from 'react'
import './block5.css'
import { Link } from 'react-router-dom'
import {Container, Navbar} from 'react-bootstrap'

export default function Block5() {
    return (
        <div className="block5">
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
                            <p>OUR PORTFOLIO <span></span></p>
                            <h2>Check Our Recent Client Work</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
