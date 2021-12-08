let dateRef = document.getElementById("inputDate");
let timeRef = document.getElementById("inputTime");
let placesRef = document.getElementById("inputLocation");
let nameRef = document.getElementById("inputName");

dateRef.innerText = new Date().toDateString();
timeRef.innerText = new Date().toLocaleTimeString();

let yourLoc = retrieveData('location');

placesRef.innerText = yourLoc;

let yourName = retrieveData('name');

nameRef.innerText = yourName;

function addList() 
{

    //Define variables as the HTML reference of the student's name, ID, problem and its corresponding error messages
    let tempRef = document.getElementById("inputTemperature");

    //Defining variable and assigning it with the value of the respective HTML reference
    let tempValue = tempRef.value;


    if (tempValue < 30 && tempValue > 44) 
    {    
        alert("Invalid Temperature Input")
        return;
    }
    else 
    {
        myData.date = new Date().toDateString();
        myData.time = new Date().toLocaleTimeString();
        myData.place = yourLoc;
        myData.temp = tempValue;

        checkRecord.addData(myData)
        updateData(RECORD_KEY, checkRecord);
        window.location = "history.html";
        
    }
x}
