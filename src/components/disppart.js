import React, { Component } from 'react';

class Disppart extends Component{

    constructor(props){
        super(props);
        this.state = {
            no : 0,
        }
    }
    componentWillReceiveProps({no}){
        
    }
    componentDidMount(){
        if(this.props.house == 'thandava'){
            this.setState({no:this.props.data.tnop})
        }
        else if(this.props.house== 'dhruva'){
            this.setState({no:this.props.data.dnop})
        }
        else if(this.props.house=='rakshasa'){
            this.setState({no:this.props.data.rnop})
        }
        else if(this.props.house=='samhara'){
            this.setState({no:this.props.data.snop})
        }
        console.log(this.state.no)
        console.log(this.props.data.eventmax)

    }

    render(){if (this.state.no<this.props.data.eventmax){
    return <p>{this.props.data.eventmax-this.state.no} remaining</p>
    }
    else{
    return(
        <p>Max number of participants reached</p>
    )
    }
    }
}
export default Disppart