import React,{Component} from 'react'
import Dog from './Dog'
import './Doglist.css'
import {Link} from 'react-router-dom'



class Doglists extends Component{
  


    render(){
        let style = {
            display : 'inherit',
            margin : '10px',
            padding : '10px'
        }
        return(
            <div className='container'>
            <div className='row'>
                {this.props.dogs.map(dog=>(
                <div className='col-lg-4 text-center Dog'  key={dog.name}>
                        <h5 className="">{dog.name}</h5>
                        <img src={dog.src} className="" alt="dog.name"/>
                        <Link to={`/dogs/${dog.name}`} style={style} className='btn btn-sm btn-info rounded'>See more!</Link>
                </div>))}
          </div>
          </div>
        )
    }
}

export default Doglists