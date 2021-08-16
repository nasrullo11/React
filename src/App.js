import React from 'react'
import Block2 from './block2/Block2'
import Block3 from './block3/Block3'
import Block4 from './block4/Block4'
import Block5 from './block5/Block5'
import TopBar from './Navbar/Navbar'
import { Route, Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import Block6 from './block6/Block6'

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={TopBar}/>
            <Route exact path="/topbar" component={TopBar} />
            <Route exact path="/block2" component={Block2} />
            <Route exact path="/block3" component={Block3} />
            <Route exact path="/block4" component={Block4} />
            <Route exact path="/block5" component={Block5} />            
            <Route exact path="/block6" component={Block6} />
        </div>
    )
}

export default App
