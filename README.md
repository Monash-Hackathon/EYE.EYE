# Team No. 13

# Theme
Digitization

# EYE.EYE
EYE.EYE is a mobile web app that integrates MySejahtera to reduce the queue time and decrease the time lost for scanning the QRcode to enter public places by applying iris scanner with our firmware. Here, we will assume that our EYE.EYE and MySejahtera have been integrated, thus we have the access to their database and are able to make changes.

# Description
Our team decided on the solution that will have the most impact in our daily life during this mask era. Additionally, iris scanning is chosen since during this pandemic, everyone is wearing their mask at public places. Thus, iris scanner and our firmware will do the job quick and effectively.

EYE.EYE provides 2 different interfaces, where one of them will be for the public places (index.html and user.html), and the other one (history.html) will be for MySejahtera user account in their own devices.  Combining both interfaces, EYE.EYE will have 3 main pages, which is the iris scanning page, user page (date, time, places, and temperature input), and the history page. In this prototype, we also assumed that there is already one user registered to MySejahtera account with its iris image and with the name Matt.

Firstly, the iris scanning page (index.html). As there is no sensor in the devices we are working on, iris image will be uploaded. For this prototype, the image will be converted to base64string and to be compared with the correct image. If the images match (Photos/correct_iris.jpg), the user will be directed to the user page or else, the user will be alerted. Also, in this page, the user will be asked to allow location access to gain the exact location. 

Moving on to the user page (user.html), this page is to input the temperature measured and to show the information (name, date, time, and places) to the public places' visitors so that they can confirm it. Moreover, for the location, we use OpenCage API to perform geocoding for the address of the user location. Next, after the temperature (valid between 30 to 40 degree celcius) is input and the submit button is clicked, the user will be directed to history page.

Finally, history page. The purpose of this page is to display the places visited by the MySejahtera user account and other information such as the date, time, temperature and risk level. 

# Installation
EYE.EYE does not need to be installed since it is a mobile web application, and can support devices on different platforms. All you need is to have a web browser(preferably Google Chrome) to open the HTML files to run the program.

# Real Scenario
There are some differences in this code implementation compared to the real scenario. For the index.html or iris scanning page, the iris pattern of an individual will be scanned and compared to the database. Not only that, the temperature will be also measured by a temperature sensor before moving on to the user page.

Next, for the user page, the person will confirm their details (name, date, etc) before submitting it. It has been mentioned previously, that the user will be directed to the history page after clicking the submit button. The reason is  because we would like to present the whole firmware in a flow. So, in contrast to the code implementation, the devices will be back to the iris scanning page when the button is clicked and the history page can only be accessed from the user accounts' devices.

# Credits
Chok Ming Jie
Ken Wilbert Osman
Lee Xue Qi
Roy Ng Zhan Lok

 