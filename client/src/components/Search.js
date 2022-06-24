import React from "react";

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            query:''
        }
        this.onChange = this.onChange.bind(this)
        this.search = this.search.bind(this)
    }

    onChange(e){
        this.setState({
            query:e.target.value
        })
    }
    search(){
        this.props.onSearch(this.state.query)
    }
    render(){
        return (<div>
            <input value={this.state.query} onChange={this.onChange}/>
            <button onClick={this.search}>Search</button>    
            </div>
        )
    }
}

export default Search