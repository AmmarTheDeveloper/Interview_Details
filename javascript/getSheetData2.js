
//when get data will called then it return google sheet value
async function getData () { //when we call getData function it wil l return value from the sheet in js object form
    const data = await getSheetData( {
        sheetID: '1NMNVp2KHLnMmEgU3KBp1eZtFMWZOhIsftXg4sAcc1Qs',
        sheetName: 'Interview Details',
        query: 'SELECT *',
        callback: callback
    } )
    return data
}


// this is callback function for returning data
function callback ( data ) {
    let infoCollection = []
    data.forEach( value => {

        let givenDate = getDate( value.Date )

        let Date_Of_Interview = getDate( value.Date_Of_Interview )

        let info = {
            Date: givenDate,
            Candidate_Name: value.Candidate_Name,
            Company_Name: value.Company_Name,
            Hr_Name: value.Hr_Name,
            Hr_Number: value.Hr_Number,
            Date_Of_Interview: Date_Of_Interview,
            Company_Address: value.Company_Address,
            Interview_Questions: value.Interview_Questions
        }
        infoCollection.push( info )

    } )

    return infoCollection
}


function getDate ( userDate ) {
    try {
        let year = userDate.getFullYear()
        let month = userDate.getMonth() + 1
        let date = userDate.getDate()
        month = ( month < 10 ) ? '0' + month : month
        date = ( date < 10 ) ? '0' + date : date
        let givenDate = year + '-' + month + '-' + date
        return givenDate
    } catch {
        return 'null'
    }
}