import React,{ Component } from "react"
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{

    constructor(props){
        super(props);  

        this.state = {incorrectAnswer : false}
    }
    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer)
        {
            this.props.showNextQuestionHandler()
            this.setState(this.state.incorrectAnswer = false)
        }
        else  this.setState(this.state.incorrectAnswer = true)
    }

    render(props){

        return(
        <main>
            {this.state.incorrectAnswer
            ? <p className="error">Sorry, that's not right.</p>
            : null}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_options, index) => (
              <li><QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_options} /></li>
            ))}    
          </ul>
        </section>
      </main> 
        )
    }
}

export default QuizQuestion;