import React, { Component } from 'react'

class Winner extends Component{
    constructor(props){
        super(props);
        this.state = {
            fhouse:'',
            shouse:'',
            thouse:'',
            disppart:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange(e){
        console.log(this.props.data.item.thandava)
        if(e.target.name=='thandava'){
        await
        this.setState ({
            [e.target.name]:e.target.value,
            disppart : this.props.data.item.thandava
        })}
        else if(e.target.name=='samhara'){
        await
        this.setState({
            [e.target.name]:e.target.value,
            disppart : this.props.data.item.samhara
        })}
        else if(e.target.name=='rakshasa'){
        await
        this.setState({
            [e.target.name]:e.target.value,
            disppart : this.props.data.item.rakshasa
        })}
        else if(e.target.name=='dhruva'){
        await
        this.setState({
            [e.target.name]:e.target.value,
            disppart : this.props.data.item.dhruva
        })}
        console.log(this.state.disppart)
        
    }

    render(){
        return(
            <div>
                First:
                <select name = "fhouse" onChange = {this.handleChange}>
                    <option value = "thandava">Thandava</option>
                    <option value = "dhruva">Dhruva</option>
                    <option value = "rakshasa">Rakshasa</option>
                    <option value = "samhara">Samhara</option>
                </select>
                <select>
                    
                </select>
                Second:
                <select>
                    <option value = "thandava">Thandava</option>
                    <option value = "dhruva">Dhruva</option>
                    <option value = "rakshasa">Rakshasa</option>
                    <option value = "samhara">Samhara</option>
                </select><br/>
                Third:
                <select>
                    <option value = "thandava">Thandava</option>
                    <option value = "dhruva">Dhruva</option>
                    <option value = "rakshasa">Rakshasa</option>
                    <option value = "samhara">Samhara</option>
                </select><br/>
                
            </div>
        )
    }
}
export default Winner