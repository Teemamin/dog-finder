import React,{Component} from 'react'
import {Link} from 'react-router-dom'



class Dog extends Component{
  


    render(){
        let name = this.props.match.params.name
        let dog = this.props.dogs.find(d=>d.name.toLowerCase() === name.toLowerCase())
        let style = {
            width : '40%',
            margin : '0 auto'
        }
        return(
            <div> 
                <div className="card">
                    <img src={dog.src} className="card-img-top" style={style} alt={dog.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{dog.name}</h5>
                        <p className="card-text">{dog.facts}</p>
                        <Link to='/dog'>Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dog