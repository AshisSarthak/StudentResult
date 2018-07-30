import React, { Component } from 'react';
import './result.css';

export class ResultComponent extends Component {

  constructor(){
    super();
    this.data=[];
  }

  componentWillMount(){
    this.data = [{
      'name': 'ashis',
      'marks': {
        'maths': 50,
        'science': 50,
        'english': 50
      },
      'rollNumber': 'AC43'
    },{
      'name': 'rajiv',
      'marks': {
        'maths': 50,
        'science': 15,
        'english': 60
      },
      'rollNumber': 'AC42'
    },{
      'name': 'suvy',
      'marks': {
        'maths': 60,
        'science': 83,
        'english': 50
      },
      'rollNumber': 'AC41'
    }]
  }

  createHeader(){
    return(
      <section className='headerSection'>
        <section className='header resultsHeader'>Name</section>
        <section className='header resultsHeader'>Roll Number</section>
        <section className='header resultsHeader'>Total Marks</section>
        <section className='header resultsHeader'>Status</section>
      </section>
    )
  } 

  getTotalMarks(marks){
    let totalMarks = 0, isFailed = false;
    Object.values(marks).map(mark => {
      if(mark<20){
        isFailed = true;
      }
      totalMarks += mark;
    });
    const isTopper = totalMarks === this.getToperMark();
    return {
      totalMarks : totalMarks,
      isFailed: isFailed,
      isTopper: isTopper,
      status: this.getStatus(isFailed, isTopper),
      customClass: (isFailed) ? 'failed cell' : ((isTopper) ? 'topper cell' : 'nameCell cell')
    };
  }

  getToperMark(){
    let studentMarks = [];
    this.data.map(student => {
      let totalMarks= 0;
      Object.values(student.marks).map(mark => {
        totalMarks += mark;
      });
      studentMarks.push(totalMarks);
    });
    return studentMarks.reduce(function(a, b) { return Math.max(a, b); }); 
  }

  getStatus(isFailed, isTopper){
    if(isFailed){
      return 'FAILED'
    } else if(isTopper){
      return 'TOPPER'
    } else {
      return 'PASSED'
    }
  }


  createRows = () =>{
    
    return(
      this.data.map(value => {
        const {totalMarks, isFailed, isTopper, status, customClass} = this.getTotalMarks(value.marks);
        return (
          <section className='headerSection'>
            <section className={customClass}>{value.name}</section>
            <section className='cell'>{value.rollNumber}</section>
            <section className='cell'>{totalMarks}</section>
            <section className='cell'>{status}</section>
          </section>
        )
      })
    )
  }

  render() {
    return (
      <div className="App">
        <section className='wrapperHeader'>Student Result Board</section>
        {this.createHeader()}
        {this.createRows()}
      </div>
    );
  }
}
