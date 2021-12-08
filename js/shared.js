const RECORD_KEY = "record";
const DATA_KEY = "data";
const LOC_KEY = "location";
const NAME_KEY = "name";


class Data
{
    //constructor for the Data
    constructor(date = "", time = "", place = "", temp = 0)
    {
        //Attributes inside the Data class
        this._date = date;
        this._time = time;
        this._place = place;
        this._temp = temp;
    }
    //Accessors for the date
    get date()
    {
        return this._date;
    }

    //Accessors for the time
    get time()
    {
        return this._time;
    }

    //Accessors for the place
    get place()
    {
        return this._place;
    }

    //Accessors for the temperature
    get temp()
    {
        return this._temp;
    }

    set date(newDate) {
        this._date = newDate;
    }

    
    set time(newTime) {
        this._time = newTime;
    }
    
    set place(newPlace) {
        this._place = newPlace;
    }
    
    set temp(newTemp) {
        this._temp = newTemp;
    }
    //fromData method that will restore the data retrieved from local storage to the Data instance
    fromData(dataObject)
    {
        this._date = dataObject._date;
        this._time = dataObject._time;
        this._place = dataObject._place;
        this._temp = dataObject._temp
    }
}


class History
{
    //constructor for the History
    constructor()
    {
        //Attributes
        this._record = [];
    }

    //Accessor for the history
    get record()
    {
        return this._record;
    }

    addData(object) {
        let newData = new Data();
        newData.fromData(object);
        this._record.push(newData);
    }


    fromData(dataObject) {
        this._record = [];
        if (dataObject._record != undefined) {
            for (let j = 0; j < dataObject._record.length; j++) {
                let newBooking = new Data();
                newBooking.fromData(dataObject._record[j]);
                this._record.push(newBooking);
            }
        }
    }

}



function checkData(key)
{
    if (localStorage.getItem(key) !== null )
    {
        return true;
    }
    else
    {
        return false;
    }

}


function updateData(key, data)
{
    let theData = JSON.stringify(data);
    localStorage.setItem(key, theData);
}



function retrieveData (key)
{
    let result = localStorage.getItem(key);
    try
    {
        result = JSON.parse(result);
    }
    catch
    {
        console.log("Its not an object");
    }
    finally
    {
        return result;
    }
}

let checkRecord = new History();
let myData = new Data();



if (checkData(RECORD_KEY) == true)
{
    let dataRetrieved = retrieveData(RECORD_KEY);  
    checkRecord.fromData(dataRetrieved);

}
else if (checkData(RECORD_KEY) == false)
{   
    updateData(RECORD_KEY, checkRecord);
}


if (checkData(DATA_KEY) == true)
{
    let dataRetrieved = retrieveData(DATA_KEY);  
    myData.fromData(dataRetrieved);

}
else if (checkData(DATA_KEY) == false)
{   
    updateData(DATA_KEY, myData);
}

