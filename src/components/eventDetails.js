import React, { Component } from 'react'
import Register from './register'
import Winner from './winner'
import '../index.css';

class EventDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
             eid: this.props.data.eventid,
             item:[],
             dispregister:false,
             dispwinner:false,
        }
        this.regClick = this.regClick.bind(this)
        this.winClick = this.winClick.bind(this)
    }
    regClick(){if(!this.state.dispwinner)
        this.setState({
            dispregister: !this.state.dispregister,
        })
        else if(this.state.dispwinner)
        this.setState({
            dispregister:!this.state.dispregister,
            dispwinner:!this.state.dispwinner
        })
    }
    winClick(){if(!this.state.dispregister)
        this.setState({
            dispwinner: !this.state.dispregister

        })
        else if(this.state.dispregister)
        this.setState({
            dispregister:!this.state.dispregister,
            dispwinner:!this.state.dispwinner
        })
        console.log(this.state.dispwinner)
        console.log(this.state.dispregister)
    }
    componentDidMount(){
        fetch(`http://5e142950bce1d10014bae521.mockapi.io/events/${this.state.eid}`)
             .then(res => res.json())
             .then(json => {
                 this.setState({
                     item : json
                 })
             } )
    }

    render(){
        if(!this.state.dispregister&&!this.state.dispwinner)
        return(
        <div className = 'eventdesc'>
            <h2>{this.state.item.ename} </h2>
            <br/><br/>
            <h2>Description</h2>
            <p>{this.state.item.edesc}</p>
            <br/>
            <br/>
            <h2>Rules</h2>
            <p>{this.state.item.erules}</p>
            <button className="eventbutton" onClick = {this.regClick}>Register</button>
            <button className="eventbutton" onClick = {this.winClick}>Winner</button>
        </div>)

        else if (this.state.dispregister)
        return(
            <div className='eventdesc'>
                <Register data = {this.state}/>
                {console.log(this.state.item)}
                <button className='eventbutton' onClick = {this.regClick}>Submit</button>
            </div>
        )
        else if(this.state.dispwinner)
        return(
            <Winner data = {this.state}/>
        )
    }
}

export default EventDetails