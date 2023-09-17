//HighrOrderComponnets

import React from "react";

const withFetch = (wrappedComponent)=>{

class WithFetch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        };
    }
    componentDidMount(){
        fetch("https://json-faker.onrender.com/movies")
        .then((response)=>response.json)
        .then((data)=>{
            this.setState({movies:data.movies});
        });
    }
    render(){
        return(
            <>
                {
                    this.state.movies.length>0 &&(
                    <wrappedComponent movies={this.state.movies}/>)
                }
            </>
        );
    }
};
return withFetch;

}

export default withFetch;