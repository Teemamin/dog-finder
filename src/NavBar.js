import React,{Component} from 'react'
import {withRouter,Link, NavLink} from 'react-router-dom'

class NavBar extends Component{


    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <NavLink exact to='/dogs' className='nav-link'>Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {this.props.dogs.map(dog=>(<li className="nav-item" key={dog.name}>
                        <NavLink exact to={`/dogs/${dog.name}`} className='nav-link'>{dog.name}</NavLink>
                    </li>))}
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}

export default NavBar