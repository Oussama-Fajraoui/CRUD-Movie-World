import React from 'react';
import './App.css';
import Movies from './components/movies';
import Add from './components/Add'
import Search from './components/Search';
import axios from 'axios'
import OneMovie from './components/OneMovie';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movie:[],
      oneMovie:{},
      view:'allMovies',
      success:''
    }
    this.renderView = this.renderView.bind(this);
    this.handleview = this.handleview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectOne = this.selectOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
    this.handleSearch = this.handleSearch.bind(this)

  }
   componentDidMount(){
    fetch("http://localhost:5000/api/d").then(response =>
      response.json()
    ).then(data =>{
      this.setState({
        movie:data
      })
      })
  }

  selectOne(index){
    console.log("clicked")
    this.handleview("oneMovie")
    this.setState({
      oneMovie:this.state.movie[index]
    })
  }

  deleteOne(index){
    axios.post(("http://localhost:5000/api/d"),this.state.movie[index])
  }

  handleSearch(term){
    axios.post('http://localhost:5000/api/search',{name:term}).then(data =>{
      console.log(data)
      this.setState({
        movie:data
      })
    })
    
  }

  handleSubmit(input){
    input.preventDefault()
      axios.post("http://localhost:5000/api",{
        name: input.target.name.value,
        movie: input.target.movie.value,
        image: input.target.image.value
      }).then(data =>{
        this.setState({
          success:"success"
        })
      })
  }

  handleview(view){
    this.setState({
      view: view
    })
  }

  renderView(){
    if(this.state.view === 'allMovies'){
     return <Movies movies = {this.state.movie} selectOne={this.selectOne} deleteOne={this.deleteOne} />
    }else if(this.state.view ==='add'){
      return  <Add handleSubmit={this.handleSubmit} success={this.state.success === "success"? "Data Saved" : ''}/> 
    }else if(this.state.view==="oneMovie"){
      return <center><OneMovie recipe={this.state.oneMovie}/></center>
    }
  }


  render(){
    return (
      <div>
        <nav className='nav'>
          <div className={
            this.state.view !=="add" ?
            "nav-unselected" : "nav-selected"
          }
            onClick={()=>{
              this.handleview('add')
            }}
          >Create Movie</div>
          <div className={
            this.state.view !=='allMovies' ?
            "nav-unselected" : "nav-selected"
          }
          onClick={()=>{
            this.handleview('allMovies')
          }}
          >Movies</div>
          <div className={
            this.state.view !=='search' ?
            "nav-unselected" : "nav-selected"
          }><Search onSearch ={this.handleSearch} /></div>
        </nav>
          {this.renderView()}
      </div>
    );
  }
}

export default App;