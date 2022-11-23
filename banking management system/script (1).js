var createacc = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
        <div style="display:flex; height: 80vh; width: 50vw; background-color: blue; flex-direction: column; justify-content: space-between; align-items:center ; align-content: space-between;border-radius:0px;">
        <div id="upper" style="color: black ; font-size: 6vh;">Fill in the details</div>
        <div class="middle" style="display: flex; flex-direction: column;justify-content: space-between;align-content: space-between; height: 100vh;">
            <div class="elements1" style="display: flex; flex-direction: row;justify-content: space-between;" ><div id="name" style="color: white;">Customer name</div>&#9<div id="nameplace"><input type="text" size="50"  placeholder="Customername"></div>
        </div>
            <div class="elements2" style="display: flex; flex-direction: rowjustify-content: space-between; align-items:center ; align-content: space-between; ;" ><div style="color: white;">Contact mumber</div><div id="nameplace"><input type="text" placeholder="Contact number"></div>
            </div>
            <div class="elements3" style="display: flex; flex-direction: row;" ><div id="name" style="color: white;">Gender</div>
            <div id="nameplace"><div>
                <input type="radio" id="huey" name="drone" value="huey"
                       checked>
                <label for="huey" style="color: white;">Male</label>
              </div>
          
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey">
                <label for="dewey" style="color: white;">Female</label>
              </div></div>
            </div>
            <div class="elements4" style="display: flex; flex-direction: row;" ><div style="color: white;">Address</div><div id="nameplace"><input type="text" placeholder="Enter the Address"></div>
            </div>
            <div class="elements5" style="display: flex; flex-direction: row;" ><div style="color: white;">Age</div><div id="nameplace"><input type="text" placeholder="Age"></div>
            </div>
            <div class="elements6" style="display: flex; flex-direction: row;" ><div style="color: white;">Email</div><div id="nameplace"><input type="Email" placeholder="Email"></div>
            </div>
            <div class="elements7" style="display: flex; flex-direction: row;" ><div style="color: white;">Date</div><div id="nameplace"><input type="date" placeholder="Email"></div>
            </div>
            <div class="elements8" style="display: flex; flex-direction: row;" ><div id="name" style="color: white;">Account Type</div>
            <div id="nameplace"><div>
                <input type="radio" id="huey" name="drone" value="huey"
                       checked>
                <label for="huey" style="color: white;">Current Account</label>
              </div>
          
              <div>
                <input type="radio" id="dewey" name="drone" value="dewey">
                <label for="dewey" style="color: white;">Savings Account</label>
              </div></div>
            </div>

            
            </div>
        </div> 
        <div id="lower" style="display:inline-flex; margin-left:170px; flex-direction: row; align-content;justify-content: space-between;
        height: 60px; width: 10vw;">
            <div id="submit">
                <button style="height:30px; width: 150px;background-color:white;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:white;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var deleteacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>deleteacc</title>
</head>
<body>
    <div id="main" style="display: flex; flex-direction: column;align-content: space-between; height: 50vh; width: 40vw; justify-content: space-between; background-color: blue;border-radius:0px;">
        <div id="upper" style="color: black; text-align:center;padding-top:70px;font-size:5vh;">Enter account number to delete</div>
        <div id="middle" style="height: 20px; width: auto; padding-left: 150px;">
            <input type="text" placeholder="Account number" style="height: 40px;font-size:3vh;">
        </div>
        <div id="lower" style="display:inline-flex; margin-left:110px;flex-direction: row; justify-content: space-between;
        height: 80px; width: 20vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:white;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:white;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var updateacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>deleteacc</title>
</head>
<body>
    <div id="main" style="display: flex; flex-direction: column;align-content: space-between; height: 50vh; width: 40vw; justify-content: space-between; background-color: blue;border-radius:0px;">
    

        <div id="upper" style="color: black; text-align:center;font-size:5vh;padding-top:70px">Enter account number to Update</div>
        <div id="middle" style="height: 30px; width: auto; padding-left: 145px;">
            <input type="text" placeholder="Account number" style="height: 40px;font-size:3vh;">
        </div>
        <div id="lower" style="display:inline-flex; margin-left:110px;flex-direction: row; justify-content: space-between;
        height: 80px; width: 20vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:white;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:white;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var allacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>allacc</title>
</head>
<body>
    <div id="main" style="Background-color:green;padding-left:30px">
        <div id="upper" style="font-size: 5vh;">Displaying all accounts</div>
        <div id="lower" style="padding-top:20px ;">
            <table border="3px solid black;" style="float:right;Background-color:white;position:abosolute;">
                <tr>
                <th>Account number</th>
                <th>Customer name</th>
                <th>Contact number</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Age</th>
                <th>Mail-id</th>
                <th>Date</th>
                <th>Account type</th>
                <th>Balance</th>
                </tr>
                <tr>
                    <td>145263</td>
                    <td>navya</td>
                    <td>9515198772</td>
                    <td>Female</td>
                    <td>Telangana</td>
                    <td>21</td>
                    <td>navya@gmail.com</td>
                    <td>12-08-2020</td>
                    <td>Savings</td>
                    <td>3000000</td>
                </tr>
                <tr>
                    <td>142233</td>
                    <td>vijay</td>
                    <td>9515198772</td>
                    <td>Male</td>
                    <td>Andhra Pradesh</td>
                    <td>23</td>
                    <td>vijay@gmail.com</td>
                    <td>28-08-2021</td>
                    <td>Savings</td>
                    <td>50000</td>
                </tr>
            </table>
        </div>
    </div>
    
</body>
</html>`
var singleacc=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>singleacc</title>
</head>
<body>
    <div id="main" style="display: flex; flex-direction: column;align-content: space-between; height: 40vh; width: 50vw; justify-content: space-between; background-color: blue;padding-top:30px;border-radius:0px;">
        <div id="upper" style="color: black;text-align:center; font-size:5vh;">Enter account number to show details</div>
        <div id="middle" style="height: 30px; width: auto; padding-left: 126px;">
            <input type="text" placeholder="Account number" style="height: 30px;font-size:3vh;margin-left:80px">
        </div>
        <div id="lower" style="display:inline-flex;margin-left:170px; flex-direction: row; justify-content: space-between;
        height: 80px; width: 10vw;">
            <div id="submit">
                <button style="height:30px; width: 150px; background-color:white;">Submit</button>
            </div>
            <div>
                <button style="height:30px; width: 150px; background-color:white;" >Reset</button>
            </div>
        
        </div>
    </div>
    
</body>
</html>`
var deposit=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>withdraw</title>
</head>
<body>
    <div id="main" style="height: 40vh; width: 40vw; background-color:blue;display: flex; flex-direction: column;align-items: center;justify-content: space-between;border-radius:0px;padding-top:40px;margin-left:80px;">
        <div><span id="accountnumber" style="color: white; font-size: 4vh;">Account Number</span>
        <span id="input"><input type="text" placeholder="Enter Account Number" style="height: 30px;font-size:2.5vh;"></span>
        </div>
    <div>
        <span style="color: white;font-size: 4vh;">Enter Amount to deposit</span>
        <span><input type="text" placeholder="Enter Amount" style="height: 30px;font-size:2.5vh;"></span>
    </div>
    <div>
        <button style="height:30px; width: 150px; background-color:white;">Deposit</button>
        <button style="height:30px; width: 150px; background-color:white;">Clear</button>
    </div>
    
    
</body>
</html>`
var withdraw=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>withdraw</title>
</head>
<body>
    <div id="main" style="height: 40vh; width: 40vw; background-color:blue;display: flex; flex-direction: column;align-items: center;justify-content: space-between;border-radius:0px;padding-top:40px;margin-left:80px">
        <div><span id="accountnumber" style="color: white; font-size: 4vh;">Account number</span>
        <span id="input"><input type="text" placeholder="Account number"style="height:30px;font-size:2.5vh"></span>
        </div>
    <div>
        <span style="color: white;font-size: 4vh;">Enter amount to withdraw</span>
        <span><input type="text" placeholder="Amount" style="height:30px;font-size:2.5vh"></span>
    </div>
    <div>
        <button style="height:30px; width: 150px; background-color:white;">Withdraw</button>
        <button style="height:30px; width: 150px; background-color:white;">Clear</button>
    </div>
    
    
</body>
</html>`
var transfer=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transfer</title>
</head>
<body>
    <div id="main" style="height: 50vh; width: 60vw; background-color:blue;display: flex; flex-direction: column;align-items: center;justify-content: space-between;border-radius:0px;padding-top:40px;margin-left:80px">
        <div><span id="accountnumber" style="color: white; font-size: 4vh;">Account number</span>
        <span id="input"><input type="text" placeholder="Account number" style="height:30px;font-size:2.5vh"></span>
    </div>
    
    <div>
        <span style="color: white;font-size: 4vh;">Transfer's account number</span>
        <span><input type="text" placeholder="Account number" style="height:30px;font-size:2.5vh"></span>
    </div>
    <div>
        <span style="color: white;font-size: 4vh;">Enter amount to Transfer</span>
        <span><input type="text" placeholder="Amount" style="height:30px;font-size:2.5vh"></span>
    </div>
    <div>
        <button style="height:30px; width: 150px; background-color:white;">Transfer</button>
        <button style="height:30px; width: 150px; background-color:white;">Clear</button>
    </div>
    
</body>
</html>`
var statements=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>withdraw</title>
</head>
<body>
    <div id="main" style="height: 20vh; width: 40vw; background-color:blue;display: flex; flex-direction: column;align-items: center;justify-content: space-between;border-radius:0px;padding-top:40px;margin-left:80px">
        <div><span id="accountnumber" style="color: white; font-size: 4vh;">Account number</span>
        <span id="input"><input type="text" placeholder="Account number"style="height:30px;font-size:2.5vh"></span>
        </div>
    
    <div>
        <button style="height:30px; width: 150px; background-color:white;">Send</button>
        <button style="height:30px; width: 150px; background-color:white;">Clear</button>
    </div>
    
    
</body>
</html>`
var pages = {
    'createacc' : createacc,
    'deleteacc' : deleteacc,
    'updateacc' : updateacc,
    'allacc' : allacc,
    'singleacc' : singleacc,
    'withdraw' : withdraw,
    'deposit' : deposit,
    'transfer' : transfer,
    'statements': statements,
};
function getPageContent(page){
    var contentToReturn;
    switch(page){
        case 'createacc':
            contentToReturn=pages.createacc;
            break;
        case 'deleteacc':
            contentToReturn=pages.deleteacc;
            break;
        case 'updateacc':
            contentToReturn=pages.updateacc;
            break;
        case 'allacc':
            contentToReturn=pages.allacc;
            break;
        case 'singleacc':
            contentToReturn=pages.singleacc;
            break;
        case 'deposit':
            contentToReturn=pages.deposit;
            break;
        case 'withdraw':
            contentToReturn=pages.withdraw;
            break;
        case 'transfer':
            contentToReturn=pages.transfer;
            break; 
        case 'statements':
            contentToReturn=pages.statements;
            break;
        default:
            contentToReturn=pages.createacc;
            break;
        
    }
    document.getElementById('content').innerHTML=contentToReturn;
}