let dateRef = document.getElementById("smtg");
let timeRef = document.getElementById("smtg");
let placesRef = document.getElementById("smtg");

dateRef.innerText = `${new Date().toDateString}`;
timeRef.innerText = `${new Date().toLocaleTimeString}`;
placesRef.innerText = theLocation;


function addList() 
{

    //Define variables as the HTML reference of the student's name, ID, problem and its corresponding error messages
    let tempRef = document.getElementById("something");

    //Defining variable and assigning it with the value of the respective HTML reference
    let tempValue = tempRef.value;


    if (tempValue < 30 && tempValue > 44) 
    {    
        alert("Invalid Temperature Input")
        return;
    }
    else 
    {
        myData.date(dateRef);
        myData.time(timeRef);
        myData.place(placesRef);
        myData.temp(tempValue);

        checkRecord.addData(myData)
        updateData(APP_DATA_KEY, checkRecord);
        window.location = "history.html";
        
    }
}

function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    
    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    
    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");
    
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    Then
    
    var a = new Image(),
        b = new Image();
    a.src = url_a;
    b.src = url_b;
    
    var a_base64 = getBase64Image(a),
        b_base64 = getBase64Image(b);
    
    if (a_base64 === b_base64)
    {
        // they are identical
    }
    else
    {
        // you can probably guess what this means
    }