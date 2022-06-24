import React from 'react';
import './App.css';
import Movie from './components/movie';
import Add from './components/Add';
import Search from './components/Search'
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      movie:[],
      view:'allMovies'
    }
    this.renderView = this.renderView.bind(this)
    this.handleview = this.handleview.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }
   componentDidMount(){
    fetch("http://localhost:5000/api").then(response =>
      response.json()
    ).then(data =>{
      this.setState({
        movie:data
      })
      })
  }
  handleview(view){
    this.setState({
      view: view
    })
  }
  handleSubmit(input){
    input.preventDefault()
      axios.post("http://localhost:5000/api",{
        name: input.target.name.value,
        movie: input.target.movie.value,
        image: input.target.image.value
      }).then(data =>{
        console.log(data)
      })
  }
  renderView(){
    if(this.state.view === 'allMovies'){
     return <Movie movies = {this.state.movie} />
    }else if(this.state.view ==='add'){
      return  <Add handleSubmit={this.handleSubmit}/> 
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
          }><Search onSearch = {() => {
            console.log('test')
          }} /></div>
        </nav>
          {this.renderView()}
      </div>
    );
  }
}

export default App;