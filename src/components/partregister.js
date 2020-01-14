import React, { Component } from 'react'
import '../index.css';

class Partregister extends Component{

    constructor(props){
        super(props);
        this.state ={
            name : '',
            class : '',
            house : '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    async handleChange(e){
        await this.setState({
            [e.target.name]: e.target.value, 
       })
       console.log(this.state)
    }
    
    async handleClick(e){
        await this.setState({
            house : e.target.value
        })
        console.log(this.state.house)
    }
    handleSubmit(e){
        if(this.state.name || this.state.class || this.state.house){
        e.preventDefault();
        fetch(`http://5e142950bce1d10014bae521.mockapi.io/${this.state.house}`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": this.state.name,
                "class":this.state.class
           })
           });
        }
        else{
            alert('Please enter all details')
        }
    }
 

    render(){
        return(
            <div className='reg'>
            <h1>Participant Registration</h1>
            <form onSubmit = {this.handleSubmit}>
                <input className='inputfield' type= "text" name = 'name' placeholder = 'Name' onChange={this.handleChange}/><br/>
                <input className='inputfield' type= "text" name = 'class' placeholder = 'Class' onChange={this.handleChange}/><br/>
                <select className='inputfield' onClick = {this.handleClick} >
                    <option value = 'thandava'>Thandava</option>
                    <option value = 'samhara'>Samhara</option>
                    <option value = 'dhruva'>Dhruva</option>
                    <option value = 'rakshasa'>Rakshasa</option>
                </select><br/>
                <button type="submit" className='eventbutton'>Register Participant</button>
            </form>
            </div>
        )
    }
}

export default Partregister