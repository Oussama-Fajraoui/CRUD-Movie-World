import React from "react";

class Add extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            movie:'',
            image:''
        }
       this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(<center>
        <div>
            <center><h2 className="title">Add a movie</h2></center>
            <div className="container">
            <form className="New-Movie-Form" onSubmit={this.props.handleSubmit}>
                <label className="text-form" >Movie name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /><br></br>
                </label><br></br>
                <label className="text-form">Movie
                <textarea type="text" name='recipe' value={this.state.movie} onChange={this.handleChange} required /><br></br>
                </label><br></br>
                <label  className="text-form">image URL
                <input type="url" name="image" value={this.state.image} onChange={this.handleChange}  required/><br></br>
                </label><br></br>
                <input type="submit" className="btn-submit" value='Submit'/> 
                <div className="success">{this.props.success}</div>
            </form>
            </div>
        </div></center>
        )
        
    }

}
export default Add