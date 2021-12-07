function riskLevel(temp)
{
    output = ""
    if (temp > 37.8)
    {
        output = "High Risk"
    }
    else if (temp > 37.2)
    {
        output = "Medium Risk"
    }
    else 
    {
        output = "Low Risk"
    }

    return output
}


function recordList(data)
{
    //Creating a empty string variable and HTML reference for the id queueContent
    let listRef = document.getElementById("soemthing");
    let output = "";

    //Loop over the array and the student in the arrays
    for (let i = 0; i < data.length; i++)
    {
        let theRecord = new Data();

            //Assigning the properties of the student from the queue into the student instance created earlier
            theRecord.fromData(data[i]);

            //Adding the HTML code to display the list of the queue
            output += `
            <li class="mdl-list__item mdl-list__item--three-line">
                                <span class="mdl-list__item-primary-content">
                                    <span> Date : ${theRecord.date} <br> Time : ${theRecord.time}<br> Location : ${theRecord.place} <br> Temp : ${theRecord.temp}
                                    <br> Risk Level : ${riskLevel(theRecord.temp)}</span>
                                </span>
            </li>`;
        
    }
    //Print it into the web page
    listRef.innerHTML = output;
}

//To display the queue when the index.html page is run
recordList(checkRecord.record);
