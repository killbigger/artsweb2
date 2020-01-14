import React, { Component } from 'react'
import Disppart from './disppart'

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            participants : [],
            eventmax : this.props.data.item.eteammax,
            part:[],
            partid : 0,


        }
        this.handleClick = this.handleClick.bind(this)

    }

    async handleClick(e){
       await this.setState({
           part : [...this.state.part,e.target.value,e.target.name]

           
       })
       console.log(this.state)
       fetch
       
    }

    componentDidMount(){
        fetch(`http://5e142950bce1d10014bae521.mockapi.io/participants`)
             .then(res => res.json())
             .then(json => {
                 this.setState({
                     participants : json
                 })
             } )

        console.log(this.props.data.item)
        console.log(this.state)
    }

    render(){

        if(this.props.data.item.eteam){
                return(
                    <div>
                        Thandava :
                        <select name = 'thandava' onChange = {this.handleClick}>
                            {this.state.participants.filter(part => part.house === 'thandava')
                            .map(item => <option key={item.id}>{item.name}|{item.class}</option>)}
                        </select><br/>
                        Rakshasa:
                        <select name = 'rakshasa' onClick = {this.handleClick}>
                            {this.state.participants.filter(part => part.house === 'rakshasa')
                            .map(item => <option key={item.id}>{item.name}|{item.class}</option>)}
                        </select><br/>
                        Dhruva:
                        <select name = 'dhruva' onClick = {this.handleClick}>
                            {this.state.participants.filter(part => part.house === 'dhruva')
                            .map(item => <option key={item.id}>{item.name}|{item.class}</option>)}
                        </select><br/>
                        Samhara:
                        <select name = 'samhara' onClick = {this.handleClick}>
                            {this.state.participants.filter(part => part.house === 'samhara')
                            .map(item => <option key={item.id}>{item.name}|{item.class}</option>)}
                        </select>
                        
                    </div>
                )

            }
            else{
                return(
                    <p>Individual Event</p>
                )

            }
        
    }
    
}
export default Register