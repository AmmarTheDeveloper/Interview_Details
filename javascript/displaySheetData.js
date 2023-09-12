async function displayData () {
    const data = await getData()
    console.log( data )
    const table = document.querySelector( 'table tbody' )

    data.forEach( ( value, index ) => {

        let tr = document.createElement( 'tr' )
        let Interview_Questions = value.Interview_Questions.split( ',' )


        let tdCollection = `
            <td>${ index + 1 }</td>
            <td>${ value.Date }</td>
            <td>${ value.Candidate_Name }</td>
            <td>${ value.Company_Name }</td>
            <td>${ value.Hr_Name }</td>
            <td>${ value.Hr_Number }</td>
            <td>${ value.Date_Of_Interview }</td>
            <td>${ value.Company_Address }</td>
        `
        tr.innerHTML = tdCollection


        let list = document.createElement( 'ul' )

        Interview_Questions.forEach( question => {
            let li = document.createElement( 'li' )
            li.innerText = question
            list.appendChild( li )
        } )

        let td = document.createElement( 'td' )
        td.appendChild( list )
        tr.appendChild( td )

        table.appendChild( tr )

    } )
}

displayData()