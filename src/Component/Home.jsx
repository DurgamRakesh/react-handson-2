import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    state = {
        Name:'',
        Department:'',
        Rating:'',
        Emps:[]
    }
    Changfun = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    Submitfun = (para) =>{
        const obj = {
            Name:this.state.Name,
            Department:this.state.Department,
            Rating:this.state.Rating
        }
        const newaarr = this.state.Emps;
        newaarr.push(obj);
        this.setState({Emps:newaarr})
        this.setState({Name : '',Department : '',Rating : ''})
    }
    

  render() {
    return (
      <div className='maindiv'>
        <h1 className='h1-tag'>EMPLOYEE FEEDBACK FORM</h1>
        <form className='form'>
            <label htmlFor="N">Name: </label>
            <input type="text" name="Name" value={this.state.Name}  onChange={this.Changfun}/>
            <br />
            <br />
            <label>Department: </label>
            <input type="text" name="Department" value={this.state.Department}  onChange={this.Changfun}/>
            <br />
            <br />
            <label>Rating: </label>
            <input type="number" name="Rating" value={this.state.Rating}  onChange={this.Changfun} />
            <br />
            <br />
            <button type='button' onClick={this.Submitfun}>Submit</button>
        </form>
        <div className='hide-div'>
        {
            this.state.Emps.map((v,i) =>{
                return(
                    <span key={i}>Name : {v.Name} | Department : {v.Department} | Rating : {v.Rating}</span>
                )
            })
        }
        </div>
      </div>
    )
  }
}
