import React,{Component} from 'react'


class Game extends Component {
 constructor(props){
  super (props);
  const gameDigits = this.generateNumbers();
   this.state = {
     Value1: gameDigits[0],
     Value2: gameDigits[1],
     Value3: gameDigits[2],
     ProposedValue: gameDigits[3]
   };
 }   
   generateNumbers = () => {
     const value1 = Math.floor(Math.random() * 100);
	 const value2 = Math.floor(Math.random() * 100);
     const value3 = Math.floor(Math.random() * 100);
     const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
     return [value1,value2,value3,proposedAnswer]
};

	updateState = newValues => {
   this.setState (currentstate => ({
     Value1: newValues[0],
     Value2: newValues[1],
     Value3: newValues[2],
     ProposedValue: newValues[3]
    }))
 };

     handleAnswer = event => {
       const newValues = this.generateNumbers();
       this.updateState(newValues);
       const answerIsCorrect = this.CheckAnswer(event.target.name);
       this.props.handleAnswer(answerIsCorrect);
     }

      CheckAnswer = (givenAnswer) => {
        const {Value1, Value2, Value3, ProposedValue} = this.state
       const isEqual = Value1+ Value2+ Value3
        return ((isEqual === ProposedValue && givenAnswer === 'true') || (isEqual !== ProposedValue && givenAnswer === 'false'))
      }
render (){
  const {Value1, Value2, Value3, ProposedValue} = this.state;
      return(
          <div className="equation">
           <p className="text">{`${Value1} + ${Value2} + ${Value3} = ${ProposedValue}`}</p>
          <button onClick={this.handleAnswer} name='true'>True</button>
          <button onClick = {this.handleAnswer} name='false'>False</button>
</div>
)}
};

export default Game