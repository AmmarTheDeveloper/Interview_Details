const scriptURL = 'https://script.google.com/macros/s/AKfycbztlE5B96U80SsMPqiSQ0rFzQS7KD2hNOOfGrpuJRlCTMLC3eEdrz_SVlONMNlu-3Y5/exec'
const form = document.getElementById( 'form' );

const Candidate_Name = document.querySelector( 'input[name=Candidate_Name]' )
const Company_Name = document.querySelector( 'input[name=Company_Name]' )
const Hr_Name = document.querySelector( 'input[name=Hr_Name]' )
const Hr_Number = document.querySelector( 'input[name=Hr_Number]' )
const Date_Of_Interview = document.querySelector( 'input[name=Date_Of_Interview]' )
const Company_Address = document.querySelector( '[name=Company_Address]' )
const error = document.querySelector( '.error' )
const success = document.querySelector( '.success' )

form.addEventListener( 'submit', e => {
    e.preventDefault()
    let InterviewQuestions = document.querySelectorAll( '.interview-question' )
    let formArray = [ Candidate_Name, Company_Name, Hr_Name, Hr_Number, Date_Of_Interview, Company_Address ]
    let formData = new FormData()
    let curr_date = new Date()
    let date = curr_date.getDate()
    let months = curr_date.getMonth() + 1
    let year = curr_date.getFullYear()
    date = ( date < 10 ) ? '0' + date : date
    months = ( months < 10 ) ? '0' + months : months
    let today = year + '-' + months + '-' + date
    formData.append( 'Date', today )
    formArray.forEach( input => {
        formData.append( input.name, input.value )
    } )
    let Questions = []
    InterviewQuestions.forEach( QuestionInput => {
        Questions.push( QuestionInput.value )
    } )

    let questionInString = Questions.join( ',' )
    formData.append( 'Interview_Questions', questionInString )

    fetch( scriptURL, { method: 'POST', body: formData } )
        .then( response => {
            form.reset()
            alert( 'form submitted successfully' )
        } )
        .catch( error => console.error( 'Error!', error.message ) )
} )

const plus = document.querySelector( '.plus' )
const minus = document.querySelector( '.minus' )
const QuestionsContainer = document.querySelector( '.interview-questions-container' )

let NoQuestions = 1;

plus.onclick = () => {

    let QuestionInput = `<input type="text" class="interview-question">`
    QuestionsContainer.insertAdjacentHTML( 'beforeend', QuestionInput )
    NoQuestions++;

}

minus.onclick = () => {

    let lastElement = QuestionsContainer.lastElementChild
    if ( NoQuestions > 1 && NoQuestions != 1 ) {
        QuestionsContainer.removeChild( lastElement )
        NoQuestions--
    }

}