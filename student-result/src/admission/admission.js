import React, { Component } from 'react';
import './admission.css';

export class AdmissionComponent extends Component {

  constructor(){
    super();
    this.state={
      name:'',
      lastName:'',
      class:'',
      yop:'',
      marks:'',
      isValidData: false,
    };
  }

  componentWillMount(){
    
  }

  handleChange = (event) =>{
    Object.keys(this.state).map(value => {
      if(event.target.classList.contains(value)){
        this.setState({
          [value]: event.target.value
        })
      }
    });
    setTimeout(()=>{
      this.validateObj();
    },2)
  }

  validateObj = () =>{
    const yopRegex = /^[0-9]{4}$/;
    const marksRegex = /^[0-9]{2}$/;
    const nameRegex = /^[a-zA-Z]{1,20}$/;
    const className = /^[a-zA-Z0-9]{1,20}$/;
    if(this.state.name && this.state.lastName && this.state.class 
      && nameRegex.test(this.state.name) && nameRegex.test(this.state.lastName) 
    && className.test(this.state.class) && this.state.yop && this.state.marks 
    && (yopRegex.test(this.state.yop) && this.state.yop >2016) && marksRegex.test(this.state.marks)){
      this.setState({
        isValidData: true
      })
    } else {
      this.setState({
        isValidData: false
      })
    }
    
  }

  getButtonCss = () =>{
    return (this.state.isValidData) ? 'submit' : 'disabled';
  }

  render() {
    return (
      <div className="admissionFormContent">
        <section className='wrapperHeader'>Student Admission Form</section>
        <section className='headerSection'>
          <section className='headerLabel'>Name:</section>
          <section className='inputWrapper'>
            <input  className='form-control name' onChange={this.handleChange} type='text' placeholder='input only a-z,A-Z upto 20 chars' value={this.state.name} />
          </section>
        </section>
        <section className='headerSection'>
          <section className='headerLabel'>Last Name:</section>
          <section className='inputWrapper'>
            <input  className='form-control lastName' onChange={this.handleChange} type='text' placeholder='input only a-z,A-Z upto 20 chars' value={this.state.lastName} />
          </section>
        </section>
        <section className='headerSection'>
          <section className='headerLabel'>Class:</section>
          <section className='inputWrapper'>
            <input  className='form-control class' onChange={this.handleChange} type='text' placeholder='input alphanum values' value={this.state.class} />
          </section>
        </section>
        <section className='headerSection'>
          <section className='headerLabel'>Year Of Passing:</section>
          <section className='inputWrapper'>
            <input  className='form-control yop' onChange={this.handleChange} type='text' placeholder='input only number' value={this.state.yop} />
          </section>
        </section>
        <section className='headerSection'>
          <section className='headerLabel'>% of Marks</section>
          <section className='inputWrapper'>
            <input className='form-control marks' onChange={this.handleChange} type='text' placeholder='input only number' value={this.state.marks} />
          </section>
        </section>
        <section class='submitButton'>
          <input type ='button' className={this.getButtonCss()} disabled={!this.state.isValidData} value='Submit' />
        </section>
      </div>
    );
  }
}
