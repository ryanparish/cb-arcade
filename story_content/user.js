function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Hx8KVA6Q1p":
        Script1();
        break;
      case "5wLvaXIrqdC":
        Script2();
        break;
      case "5uaqT1ljxJ0":
        Script3();
        break;
      case "5bY8WCEXmBH":
        Script4();
        break;
      case "5hLDvyJZhok":
        Script5();
        break;
      case "6XtwrsRE01r":
        Script6();
        break;
      case "63THnZUAvAX":
        Script7();
        break;
      case "6DBjNisQeIv":
        Script8();
        break;
      case "6DtNtOFvkEf":
        Script9();
        break;
      case "6MWSqkHaeVA":
        Script10();
        break;
      case "6jg61Puk7Ah":
        Script11();
        break;
      case "6j4gSabOVld":
        Script12();
        break;
      case "6mRwMQFiqhd":
        Script13();
        break;
      case "6dX0YK8L3h6":
        Script14();
        break;
      case "6AK3A2QkXJr":
        Script15();
        break;
      case "6aI88PCYPXx":
        Script16();
        break;
      case "6EQUo2nZePC":
        Script17();
        break;
      case "6OESruGQCg4":
        Script18();
        break;
      case "5WdWcjHyv1M":
        Script19();
        break;
      case "6J1ibjxJPZg":
        Script20();
        break;
      case "6MI0i11OjXH":
        Script21();
        break;
      case "6hKcBQxkRVA":
        Script22();
        break;
      case "6Myd6fGleey":
        Script23();
        break;
      case "5qAABvXDUSo":
        Script24();
        break;
      case "6IxBTrSONn3":
        Script25();
        break;
      case "6ZjYg9PT0ma":
        Script26();
        break;
      case "5cdKQeXIUek":
        Script27();
        break;
      case "6S0z9b8Im6Q":
        Script28();
        break;
      case "5rowNZTSTlQ":
        Script29();
        break;
      case "63WIO4FWU9M":
        Script30();
        break;
      case "5h336dPzxty":
        Script31();
        break;
      case "6XkLjWxvGuh":
        Script32();
        break;
      case "6pntsljq6m2":
        Script33();
        break;
      case "6SDgkdlVvKd":
        Script34();
        break;
      case "6JQ9fuMQuyK":
        Script35();
        break;
      case "6Atnn4qi2h2":
        Script36();
        break;
      case "6f4KwQEDrCZ":
        Script37();
        break;
      case "6KlESOVLqrD":
        Script38();
        break;
      case "6dqcVvgPqbv":
        Script39();
        break;
      case "656JQTQyhQV":
        Script40();
        break;
      case "5ZVs4e12FRT":
        Script41();
        break;
      case "5vowvutUh66":
        Script42();
        break;
      case "6jd7njB4XE2":
        Script43();
        break;
      case "608iZJ9j4wQ":
        Script44();
        break;
      case "6TiCoAhhSc3":
        Script45();
        break;
      case "63Fdyd2bNe9":
        Script46();
        break;
      case "5jkUJPEINWQ":
        Script47();
        break;
      case "5gmTGhcM85L":
        Script48();
        break;
      case "6BGXxhl8lor":
        Script49();
        break;
      case "6GdjYdcCei6":
        Script50();
        break;
      case "662G2bjd8WP":
        Script51();
        break;
      case "6SZ3k6wAS8e":
        Script52();
        break;
      case "6b5Yx53eWZL":
        Script53();
        break;
      case "6Z7lqneIJ62":
        Script54();
        break;
      case "6SSQTEed8kr":
        Script55();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var spot1 = player.GetVar("spot1");
var spot2 = player.GetVar("spot2");
var spot3 = player.GetVar("spot3");
var spot4 = player.GetVar("spot4");
var spot5 = player.GetVar("spot5");
var spot6 = player.GetVar("spot6");
var spot7 = player.GetVar("spot7");
var spot8 = player.GetVar("spot8");
var spot9 = player.GetVar("spot9");
var spot10 = player.GetVar("spot10");
var spot11 = player.GetVar("spot11");
var spot12 = player.GetVar("spot12");
var spot13 = player.GetVar("spot13");
var spot14 = player.GetVar("spot14");
var spot15 = player.GetVar("spot15");
var spot16 = player.GetVar("spot16");
var spot17 = player.GetVar("spot17");
var spot18 = player.GetVar("spot18");
var spot19 = player.GetVar("spot19");
var spot20 = player.GetVar("spot20");
var spot21 = player.GetVar("spot21");
var spot22 = player.GetVar("spot22");
var spot23 = player.GetVar("spot23");
var spot24 = player.GetVar("spot24");
var spot25 = player.GetVar("spot25");
var spot26 = player.GetVar("spot26");
var spot27 = player.GetVar("spot27");
var spot28 = player.GetVar("spot28");

//set up global variables

var server;
var togo;
var host;
var manager;
var retail;
var grill;
var backup;
var prep;
var dish;

//Check to see if any position has been completed in its entirety. If so, set unlockAll to true and send xAPI statement.

//current mappings - updated 10.21.2022

//live games

// Game: Server 1 | gameId: spot1 | Status: Live
// Game: ToGo 1 | gameId: spot4 | Status: Live
// Game: Host 1 | gameId: spot5 | Status: Live
// Game: Manager 1 | gameId: spot6 | Status: Live
// Game: Retail 1 | gameId: spot9 | Status: Live
// Game: Retail 2 | gameId: spot10 | Status: Live
// Game: Retail 3 | gameId: spot11 | Status: Live
// Game: Retail 4 | gameId: spot12 | Status: Live
// Game: Grill 1 | gameId: spot13 | Status: Live
// Game: BOH2 | gameId: spot17 | Status: Live
// Game: Prep 1 | gameId: spot21 | Status: Live
// Game: Dish 1 | gameId: spot25 | Status: Live
// Game: Dish 2 | gameId: spot26 | Status: Live
// Game: Dish 3 | gameId: spot27 | Status: Live

//games not yet live

// Game: Server 2 | gameId: spot2 | Status: Not Live
// Game: Server 3 | gameId: spot3 | Status: Not Live
// Game: Host 3 | gameId: spot7 | Status: Not Live
// Game: Host 4 | gameId: spot8 | Status: Not Live
// Game: Grill 2 | gameId: spot14 | Status: Not Live
// Game: Grill 3 | gameId: spot15 | Status: Not Live
// Game: Grill 4 | gameId: spot16 | Status: Not Live
// Game: Backup 2 | gameId: spot18 | Status: Not Live
// Game: Backup 3 | gameId: spot19 | Status: Not Live
// Game: Backup 4 | gameId: spot20 | Status: Not Live
// Game: Prep 2 | gameId: spot22 | Status: Not Live
// Game: Prep 3 | gameId: spot23 | Status: Not Live
// Game: Prep 4 | gameId: spot24 | Status: Not Live
// Game: Dish 4 | gameId: spot28 | Status: Not Live

//end of current mappings list! Please keep this updated!


//server [spot1] - 1 game live (of 3 planned)
//server [spot2, spot3] - upcoming games to add to condition when they are live!

if(spot1 == true){
    var server = true
} else{
    var server = false
}

//to-go [spot4] - 1 game live (of 0 planned)
//to-go [add new spots] - upcoming games to add to condition when they are live!



if(spot4 == true){
    var togo = true
} else{
    var togo = false
}


//manager [spot6] - 1 game live (of 0 planned)
//manager [add new spots] - upcoming games to add to condition when they are live!


if(spot6 == true){
    var manager = true
} else{
    var manager = false
}



//prep [spot21] - 1 game live (of 4 planned)
//prep [spot22, spot23, spot24] - upcoming games to add to condition when they are live!


if(spot21 == true){
    var prep = true
} else{
    var prep = false
}

//retail [spot9, spot10, spot11, spot12] - 4 games live (of 4 planned)

if(spot9 == true && spot10 == true && spot11 == true && spot12 == true){
    var retail = true
} else{
    var retail = false
}


//backup [spot17] - 1 game live (of 4 planned)
//backup [spot18, spot19, spot20] - upcoming games to add to condition when they are live!


if(spot27 == true){
    var backup = true
} else{
    var backup = false
}


//grill [spot13] - 1 game live (of 4 planned)
//grill [spot14, spot15, spot16] - upcoming games to add to condition when they are live!


if(spot13 == true){
    var grill = true
} else{
    var grill = false
}


//host [spot5] - 1 game live (of 3 planned)
//host [spot7, spot8] - upcoming games to add to condition when they are live!


if(spot5 == true){
    var host = true
} else{
    var host = false
}


//dish-maint [spot25, spot26,spot27] - 3 games live (of 4 planned)
//dish-maint [spot28] - upcoming game to add to condition when it is live!


if(spot25 == true && spot26 == true && spot27 == true){
    var dish = true
} else{
    var dish = false
}

//final logic to set unlockAll and send xAPI statement


if(server == true || togo == true || manager == true || prep == true || retail == true || backup == true || grill == true || host == true || dish == true) {
    player.SetVar("unlockAll", true);
    player.SetVar("unlockFix", true);
} else{
    player.SetVar("unlockAll", false);
    console.log("conditions were not met for the following:");
    console.log("server: " + server);
    console.log("togo: " + togo);
    console.log("manager: " + manager);
    console.log("prep: " + prep);
    console.log("retail: " + retail);
    console.log("backup: " + backup);
    console.log("grill: " + grill);
    console.log("host: " + host);
    console.log("dish: " + dish);
}

}

function Script2()
{
  const handleError = (response) => {
    //console.log(response);
    if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
    } else {
        return response.json();
    }
};
// get these from Schoox player
// cb id not schoox id
const player = GetPlayer();
const userId = player.GetVar('employeeID');
const store = player.GetVar('storeNum');
const fname = player.GetVar('firstName');
const lname = player.GetVar('lastName');
const errorMsg = userId + "-failed";
// this can be hardcoded or set as variable
const url = 'https://inceptionlabs.com/dodb/addplayer.php';
let data = new FormData();
data.append('user', userId);
data.append('store', store);
data.append('fname', fname);
data.append('lname', lname);
fetch(url, {
    method: 'POST',
    body: data,
})
    .then(handleError)
    .then((data) => {
        console.log(data.type);
        console.log(data.message);
        if (data.type == 'success') {
            player.SetVar('successMsgNum', userId);
        } else {
            // do something else
            player.SetVar('successMsg', errorMsg);
        }
    });
}

function Script3()
{
  var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
employeeID = employeeID.toString();
var baseURI = "http://crackerbarrel.com/xapi/storyline/arcade/unlock/"

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'https://activitystrea.ms/schema/1.0/save',
        display: {
            'en-US': 'Saved'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': 'Unlocked All Position Levels'
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/unlock": {
                    unlockAll: "true"
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

function Script4()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot1/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot1", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot1", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script5()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot4/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot4", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot4", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script6()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot5/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot5", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot5", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script7()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot6/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot6", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot6", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script8()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot7/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot7", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot7", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script9()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot9/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot9", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot9", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script10()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot10/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot10", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot10", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script11()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot11/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot11", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot11", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script12()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot12/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot12", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot12", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script13()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot13/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot13", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot13", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script14()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot17/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot17", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot17", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script15()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot18/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot18", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot18", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script16()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot21/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot21", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot21", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script17()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot22/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot22", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot22", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script18()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot25/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot25", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot25", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script19()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot26/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot26", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot26", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script20()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot27/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot27", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot27", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script21()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/spotTheDifference/spot28/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("spot28", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("spot28", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script22()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!
var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/toGoTris/tgt1/" + employeeID;



const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("tgt1", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("tgt1", true);

            // player.SetVar("ADR", ADR);

            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script23()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!
var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/toGoTris/tgt2/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("tgt2", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            // let ADR = data.statements[0].object.definition.extensions["http://crackerbarrel.com/xapi/storyline/arcade/metadata"].timeStamp;
            player.SetVar("tgt2", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script24()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!
var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/toGoTris/tgt3/" + employeeID;




const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("tgt3", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("tgt3", true);

            // player.SetVar("ADR", ADR);

            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script25()
{
  var player = GetPlayer();
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!
var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/preferences/" + employeeID;



const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("jukeboxPrefs", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("jukeboxPrefs", true);
            let jukeboxSelection = data.statements[0].object.definition.extensions["http://crackerbarrel.com/xapi/storyline/arcade/preferences"].jukeboxSelection;
            let songSelector = data.statements[0].object.definition.extensions["http://crackerbarrel.com/xapi/storyline/arcade/preferences"].songSelector;
            let volume = data.statements[0].object.definition.extensions["http://crackerbarrel.com/xapi/storyline/arcade/preferences"].volume;
            player.SetVar("jukeboxSelection", jukeboxSelection);
            player.SetVar("songSelector", songSelector);
            player.SetVar("volume", volume);
        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script26()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/crossword/crosswordG1/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("cw1", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("cw1", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script27()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/crossword/crosswordG2/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("cw2", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("cw2", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script28()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/crossword/crosswordG3/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("cw3", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("cw3", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script29()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/crossword/crosswordG4/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("cw4", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("cw4", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script30()
{
  var player = GetPlayer();
// var baseURI = player.GetVar("baseURI");
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/crossword/crosswordG5/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("cw5", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("cw5", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script31()
{
  var player = GetPlayer();
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/unlock/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("unlockAll", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("unlockAll", true);


            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script32()
{
  var player = GetPlayer();
var employeeID = player.GetVar('employeeID');
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";

//comment out the unused variable assignments!

var setupQuery = "http://crackerbarrel.com/xapi/storyline/arcade/feedback/rating/" + employeeID;


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements?activity=' + setupQuery;
fetch(uri, {
    method: 'GET',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        Authorization: auth,
    },
}
)
    .then(handleError)
    .then(data => {
        if (data.statements.length == 0) {
            console.log("empty statements");
            //comment out the unused variable assignments!
            player.SetVar("alreadyFeedback", false);
        } else {
            console.log(data);
            // process the data
            //comment out the unused variable assignments!
            player.SetVar("alreadyFeedback", true);
            let courseRating = data.statements[0].object.definition.extensions["http://crackerbarrel.com/xapi/storyline/arcade/feedback/"].feedback;
            player.SetVar("alreadyRated", courseRating);

            // set SL variables
            // set answer variables


        }
    })

    .catch(error => {
        switch (error.message) {
            case '401':
                console.log('validation or parsing error');
                break
            case '500':
                console.log('server error, try again')
                break
            default:
                console.log('unhandled')
                break
        }
    }); 
}

function Script33()
{
  //edited for demo
const player = GetPlayer();
player.SetVar("status", 200);
player.SetVar("lastName", "None")
store = 'Home Office Employee';
jobs = 'Home Office Employee';
player.SetVar("job1", jobs);
player.SetVar("unlockAll", true);
player.SetVar("storeNum", store);

}

function Script34()
{
  //this script loads the music player JavaScript dynamically into the head of the document

function add_line() {
var line = document.createElement("audio");
var head=document.getElementsByTagName('body')[0];
line.type = "audio/mp3";
line.src="";
line.id="bgSong";
line.autoplay = true;
line.loop = true;
head.appendChild(line);
}

//this code makes sure that the above code only executes once. It also sets the starting audio volume to 50%
if(document.getElementById('bgSong')==null){
add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}
}

function Script35()
{
  var player = GetPlayer();
var currentFile = player.GetVar("jukeboxSelection");
currentFile = "story_content/music/" + currentFile + ".mp3";
var audio = document.getElementById('bgSong');
audio.src= currentFile;
audio.load();
audio.play();
var volume = player.GetVar("volume");
volume = volume/20;
audio.volume = volume;
player.SetVar("loadMusic", true);



}

function Script36()
{
  const handleError = (response) => {
  //console.log(response);
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  } else {
    return response.json();
  }
};
// get these from Schoox player
// cb id not schoox id
const player = GetPlayer();
const userId = player.GetVar("employeeID");
const url = 'https://inceptionlabs.com/dodb/querypoints.php';
let data = new FormData();
data.append('user', userId);
fetch(url, {
  method: 'POST',
  body: data,
})
  .then(handleError)
  .then((data) => {
    console.log(data);
    if (data.type == 'success') {
      const spotPoints = data.message.spot.spotpoints;
      const togotrisPoints = data.message.togotris.togotrispoints;
      const crosswordPoints = data.message.crossword.crosswordpoints;
      player.SetVar("spotPoints", spotPoints);
      player.SetVar("togotrisPoints", togotrisPoints);
      player.SetVar("crosswordPoints", crosswordPoints);
      player.SetVar("gotScores", true);

    } else {
      // do something else we got an error
      //player.SetVar('errorMsg', game);
    }
  });
}

function Script37()
{
  const handleError = (response) => {
  //console.log(response);
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  } else {
    return response.json();
  }
};
const player = GetPlayer();
const url = 'https://inceptionlabs.com/dodb/querytop5.php';
fetch(url, {
  method: 'GET',
})
  .then(handleError)
  .then((data) => {
    let count = 1;
    for(let i = 0; i < data.length; i++) {
      [store, players, games, score] = Object.values(data[i]);
      player.SetVar(`leaderStoreS${count}`, store);
      player.SetVar(`leaderPlayersS${count}`, players);
      player.SetVar(`leaderGamesS${count}`, games);
      player.SetVar(`leaderScoreS${count}`, score);
      count++;
    }
  });
}

function Script38()
{
  const handleError = (response) => {
  //console.log(response);
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  } else {
    return response.json();
  }
};
// get these from Schoox player
// cb id not schoox id
const player = GetPlayer();
const store = player.GetVar("storeNum");
const url = 'https://inceptionlabs.com/dodb/querystorerank.php';
fetch(url, {
  method: 'GET',
})
  .then(handleError)
  .then((data) => {
    if (data.type == 'error') {
      // do something else we got an error
      player.SetVar('storeRank', "We can't find your store!");
      player.SetVar('totalStores', "We're sorry!");
    } else {
      //console.log(data);
      const total = data.length;
      let rank = (data.findIndex(data => data.storeNum == store)) + 1;
      console.log(rank);
      console.log(total);
      player.SetVar("storeRank", rank);
      player.SetVar("totalStores", total)
    }
  });
}

function Script39()
{
  const handleError = (response) => {
  //console.log(response);
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  } else {
    return response.json();
  }
};
const player = GetPlayer();
const url = 'https://inceptionlabs.com/dodb/querytop10.php';
fetch(url, {
  method: 'GET',
})
  .then(handleError)
  .then((data) => {
    let count = 1;
    for(let i = 0; i < data.length; i++) {
      console.log(count);
      [ename, store, games, score] = Object.values(data[i]);
      player.SetVar(`leaderNameE${count}`, ename);
      player.SetVar(`leaderStoreE${count}`, store);
      player.SetVar(`leaderGamesE${count}`, games);
      player.SetVar(`leaderScoreE${count}`, score);
      count++;
    }
  });
}

function Script40()
{
  const handleError = (response) => {
  //console.log(response);
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  } else {
    return response.json();
  }
};
// get these from Schoox player
// cb id not schoox id
const player = GetPlayer();
const userId = player.GetVar("employeeID");
const url = 'https://inceptionlabs.com/dodb/queryrank.php';
fetch(url, {
  method: 'GET',
})
  .then(handleError)
  .then((data) => {
    if (data.type == 'error') {
      // do something else we got an error
      player.SetVar('errorMsg', game);
    } else {
      console.log(data);
      const total = data.length;
		let rank = (data.findIndex(data => data.employeeID == userId)) + 1;
      console.log(rank);
      console.log(total);
      player.SetVar("myRank", rank);
      player.SetVar("totalPlayers", total);
    }
  });

}

function Script41()
{
  var date = new Date();
var m = date.getMonth() + 1;
var month = m.toString();
console.log("Month is " + month);
var d = date.getDate();
var day = d.toString();
console.log("Day is " + day);
var y = date.getFullYear();
var year = y.toString();
console.log("Year is " + year);

var formattedDate = month + day + year;
var backToNumber = parseInt(formattedDate);
console.log(formattedDate);


var player = GetPlayer();
//var day1 = 11102022;
var day1 = 11122022;
var day2 = 11132022;
var day3 = 11142022;
var day4 = 11152022;
var day5 = 11162022;


if (backToNumber >= day5) {
    player.SetVar("crosswordDay", 5);
    console.log("Crossword Day 5");
} else if (formattedDate >= day4) {
    player.SetVar("crosswordDay", 4);
    console.log("Crossword Day 4");
} else if (formattedDate >= day3) {
    player.SetVar("crosswordDay", 3);
    console.log("Crossword Day 3");
} else if (formattedDate >= day2) {
    player.SetVar("crosswordDay", 2);
    console.log("Crossword Day 2");
} else if (formattedDate >= day1) {
    player.SetVar("crosswordDay", 1);
    console.log("Crossword Day 1");
} else {
    player.SetVar("crosswordDay", 0);
    console.log("It ain't time yet!");
}

}

function Script42()
{
  const handleError = (response) => {
  //console.log(response);
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    return Promise.reject(error);
  } else {
    return response.json();
  }
};
// get these from Schoox player
// cb id not schoox id
const player = GetPlayer();
const userId = player.GetVar('employeeID');
const game = player.GetVar('gameId');
const points = player.GetVar('combinedPoints');
const postFail = game + '-postFailed';
const url = 'https://inceptionlabs.com/dodb/addpoints.php';
let data = new FormData();
data.append('user', userId);
data.append('game', game);
data.append('points', points);
fetch(url, {
  method: 'POST',
  body: data,
})
  .then(handleError)
  .then((data) => {
    console.log(data.type);
    console.log(data.message);
    if (data.type == 'success') {
      player.SetVar('successMsg', game);
      player.SetVar('tgt1', true);
    } else {
      // do something else
      player.SetVar('successMsg', postFail);
    }
  });
}

function Script43()
{
  var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
employeeID = employeeID.toString();
var baseURI = player.GetVar("baseURI");
var gameId = player.GetVar("gameId");
var points = player.GetVar("combinedPoints");
var parentGame = player.GetVar("parentGame");
var boxes = player.GetVar("TGT1Boxes");

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + parentGame + "/" + gameId + "/" + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'http://activitystrea.ms/schema/1.0/play',
        display: {
            'en-US': 'Played'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': 'Played ' + gameId
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/metadata": {
                    gameId: gameId,
                    points: points,
                    boxes: boxes
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

function Script44()
{
  //send xAPI statement with Arcade Feedback, including Rating, Comments, Ideas, and Bugs.

var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
var feedbackId = player.GetVar("feedbackId");
var feedbackComments = player.GetVar("feedbackComments");
var feedbackIdeas = player.GetVar("feedbackIdeas");
var feedbackBugs = player.GetVar("feedbackBugs");
var courseRating = player.GetVar("courseRating");
courseRating = courseRating.toString();
employeeID = employeeID.toString();
var baseURI = "http://crackerbarrel.com/xapi/storyline/arcade/feedback/";
var feedback;
var objectDefinition;

if(feedbackId == "rating"){
    feedback = courseRating;
    objectDefinition = "Submitted a " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "comments"){
    feedback = feedbackComments;
    objectDefinition = "Submitted review " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "ideas"){
    feedback = feedbackIdeas;
    objectDefinition = "Submitted some " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "bugs"){
    feedback == feedbackBugs;
    objectDefinition = "Submitted " + feedbackId + ".";
    console.log(feedback)
} else {
    console.log("There is an error with your statement!")
}

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + feedbackId + "/" + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'http://activitystrea.ms/schema/1.0/submit',
        display: {
            'en-US': 'Submitted'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': objectDefinition
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/feedback/": {
                    'feedbackId': feedbackId,
                    'feedback': feedback
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

function Script45()
{
  const handleError = (response) => {
    //console.log(response);
    if (!response.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    } else {
      return response.json();
    }
  };
  // get these from Schoox player
  // cb id not schoox id
  const player = GetPlayer();
  const userId = player.GetVar('employeeID');
  const rating = player.GetVar('courseRating');
  const feedbackId = player.GetVar('feedbackId');
  const postFail = rating + '-postFailed';
  const url = 'https://inceptionlabs.com/dodb/ratearcade.php';
  let data = new FormData();
  data.append('user', userId);
  data.append('rating', rating);
  data.append('feedbackId', feedbackId);
  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(handleError)
    .then((data) => {
      console.log(data.type);
      console.log(data.message);
      if (data.type == 'success') {
        player.SetVar('successMsgNum', rating);
      } else {
        // do something else
        player.SetVar('successMsgNum', 0);
      }
    });
}

function Script46()
{
  //var comments;
const handleError = (response) => {
    //console.log(response);
    if (!response.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    } else {
      return response.json();
    }
  };
  // get these from Schoox player
  // cb id not schoox id
  const player = GetPlayer();
  const userId = player.GetVar('employeeID');
  const feedbackId = player.GetVar('feedbackId');

  if(feedbackId =='bugs'){
    var comments = player.GetVar('feedbackBugs');
    console.log("Reporting Bugs...");
  } else if(feedbackId == 'ideas'){
    var comments = player.GetVar('feedbackIdeas');
    console.log("Submitting Ideas!");
  }
  else {
    var comments = player.GetVar('feedbackComments');
    console.log('Submitting Rating Comments');
  };

  console.log('The value of comments is: ' + comments);
  console.log("User is " + userId + " , and feedbackId is: " + feedbackId + " , and here are those comments... " + comments);

  const postFail = feedbackId + '-postFailed';
  const url = 'https://inceptionlabs.com/dodb/arcadeComments.php';
  let data = new FormData();
  data.append('feedbackId', feedbackId);
  data.append('user', userId);
  data.append('comments', comments);
  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(handleError)
    .then((data) => {
      console.log(data.type);
      console.log(data.message);
      if (data.type == 'success') {
        player.SetVar('successMsg', feedbackId);
      } else {
        // do something else
        player.SetVar('successMsg', postFail);
      }
    });
}

function Script47()
{
  //send xAPI statement with Arcade Feedback, including Rating, Comments, Ideas, and Bugs.

var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
var feedbackId = player.GetVar("feedbackId");
var feedbackComments = player.GetVar("feedbackComments");
var feedbackIdeas = player.GetVar("feedbackIdeas");
var feedbackBugs = player.GetVar("feedbackBugs");
var courseRating = player.GetVar("courseRating");
courseRating = courseRating.toString();
employeeID = employeeID.toString();
var baseURI = "http://crackerbarrel.com/xapi/storyline/arcade/feedback/";
var feedback;
var objectDefinition;

if(feedbackId == "rating"){
    feedback = courseRating;
    objectDefinition = "Submitted a " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "comments"){
    feedback = feedbackComments;
    objectDefinition = "Submitted review " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "ideas"){
    feedback = feedbackIdeas;
    objectDefinition = "Submitted some " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "bugs"){
    feedback == feedbackBugs;
    objectDefinition = "Submitted " + feedbackId + ".";
    console.log(feedback)
} else {
    console.log("There is an error with your statement!")
}

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + feedbackId + "/" + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'http://activitystrea.ms/schema/1.0/submit',
        display: {
            'en-US': 'Submitted'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': objectDefinition
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/feedback/": {
                    'feedbackId': feedbackId,
                    'feedback': feedback
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

function Script48()
{
  var comments;
const handleError = (response) => {
    //console.log(response);
    if (!response.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    } else {
      return response.json();
    }
  };
  // get these from Schoox player
  // cb id not schoox id
  const player = GetPlayer();
  const userId = player.GetVar('employeeID');
  const feedbackId = player.GetVar('feedbackId');

  if(feedbackId =='bugs'){
    var comments = player.GetVar('feedbackBugs');
    console.log("Reporting Bugs...");
  } else if(feedbackId == 'ideas'){
    var comments = player.GetVar('feedbackIdeas');
    console.log("Submitting Ideas!");
  }
  else {
    var comments = player.GetVar('feedbackComments');
    console.log('Submitting Rating Comments');
  };

  console.log('The value of comments is: ' + comments);

  const postFail = feedbackId + '-postFailed';
  const url = 'https://inceptionlabs.com/dodb/arcadeComments.php';
  let data = new FormData();
  data.append('feedbackId', feedbackId);
  data.append('user', userId);
  data.append('comments', comments);
  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(handleError)
    .then((data) => {
      console.log(data.type);
      console.log(data.message);
      if (data.type == 'success') {
        player.SetVar('successMsg', feedbackId);
      } else {
        // do something else
        player.SetVar('successMsg', postFail);
      }
    });
}

function Script49()
{
  //send xAPI statement with Arcade Feedback, including Rating, Comments, Ideas, and Bugs.

var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
var feedbackId = player.GetVar("feedbackId");
var feedbackComments = player.GetVar("feedbackComments");
var feedbackIdeas = player.GetVar("feedbackIdeas");
var feedbackBugs = player.GetVar("feedbackBugs");
var courseRating = player.GetVar("courseRating");
courseRating = courseRating.toString();
employeeID = employeeID.toString();
var baseURI = "http://crackerbarrel.com/xapi/storyline/arcade/feedback/";
var feedback;
var objectDefinition;

if(feedbackId == "rating"){
    feedback = courseRating;
    objectDefinition = "Submitted a " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "comments"){
    feedback = feedbackComments;
    objectDefinition = "Submitted review " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "ideas"){
    feedback = feedbackIdeas;
    objectDefinition = "Submitted some " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "bugs"){
    feedback == feedbackBugs;
    objectDefinition = "Submitted " + feedbackId + ".";
    console.log(feedback)
} else {
    console.log("There is an error with your statement!")
}

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + feedbackId + "/" + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'http://activitystrea.ms/schema/1.0/submit',
        display: {
            'en-US': 'Submitted'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': objectDefinition
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/feedback/": {
                    'feedbackId': feedbackId,
                    'feedback': feedback
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

function Script50()
{
  var comments;
const handleError = (response) => {
    //console.log(response);
    if (!response.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    } else {
      return response.json();
    }
  };
  // get these from Schoox player
  // cb id not schoox id
  const player = GetPlayer();
  const userId = player.GetVar('employeeID');
  const feedbackId = player.GetVar('feedbackId');

  if(feedbackId =='bugs'){
    var comments = player.GetVar('feedbackBugs');
    console.log("Reporting Bugs...");
  } else if(feedbackId == 'ideas'){
    var comments = player.GetVar('feedbackIdeas');
    console.log("Submitting Ideas!");
  }
  else {
    var comments = player.GetVar('feedbackComments');
    console.log('Submitting Rating Comments');
  };

  console.log('The value of comments is: ' + comments);

  const postFail = feedbackId + '-postFailed';
  const url = 'https://inceptionlabs.com/dodb/arcadeComments.php';
  let data = new FormData();
  data.append('feedbackId', feedbackId);
  data.append('user', userId);
  data.append('comments', comments);
  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(handleError)
    .then((data) => {
      console.log(data.type);
      console.log(data.message);
      if (data.type == 'success') {
        player.SetVar('successMsg', feedbackId);
      } else {
        // do something else
        player.SetVar('successMsg', postFail);
      }
    });
}

function Script51()
{
  //send xAPI statement with Arcade Feedback, including Rating, Comments, Ideas, and Bugs.

var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
var feedbackId = player.GetVar("feedbackId");
var feedbackComments = player.GetVar("feedbackComments");
var feedbackIdeas = player.GetVar("feedbackIdeas");
var feedbackBugs = player.GetVar("feedbackBugs");
var courseRating = player.GetVar("courseRating");
courseRating = courseRating.toString();
employeeID = employeeID.toString();
var baseURI = "http://crackerbarrel.com/xapi/storyline/arcade/feedback/";
var feedback;
var objectDefinition;

if(feedbackId == "rating"){
    feedback = courseRating;
    objectDefinition = "Submitted a " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "comments"){
    feedback = feedbackComments;
    objectDefinition = "Submitted review " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "ideas"){
    feedback = feedbackIdeas;
    objectDefinition = "Submitted some " + feedbackId + ".";
    console.log(feedback)
} else if (feedbackId == "bugs"){
    feedback == feedbackBugs;
    objectDefinition = "Submitted " + feedbackId + ".";
    console.log(feedback)
} else {
    console.log("There is an error with your statement!")
}

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + feedbackId + "/" + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'http://activitystrea.ms/schema/1.0/submit',
        display: {
            'en-US': 'Submitted'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': objectDefinition
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/feedback/": {
                    'feedbackId': feedbackId,
                    'feedback': feedback
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

function Script52()
{
  //this script loads the music player JavaScript dynamically into the head of the document

function add_line() {
var line = document.createElement("audio");
var head=document.getElementsByTagName('body')[0];
line.type = "audio/mp3";
line.src="";
line.id="bgSong";
line.autoplay = true;
line.loop = true;
head.appendChild(line);
}

//this code makes sure that the above code only executes once. It also sets the starting audio volume to 50%
if(document.getElementById('bgSong')==null){
add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}
}

function Script53()
{
  var player = GetPlayer();
var currentFile = player.GetVar("jukeboxSelection");
currentFile = "story_content/music/" + currentFile + ".mp3";
var audio = document.getElementById('bgSong');
audio.src= currentFile;
audio.load();
audio.play();
var volume = player.GetVar("volume");
volume = volume/20;
audio.volume = volume;



}

function Script54()
{
  var player = GetPlayer();
var audio = document.getElementById('bgSong');
var volume = player.GetVar("volume");
volume = volume/20;
audio.volume = volume;



}

function Script55()
{
  var player = GetPlayer();
var employeeID = player.GetVar("employeeID");
employeeID = employeeID.toString();
var baseURI = "http://crackerbarrel.com/xapi/storyline/arcade/preferences/"
var songSelector = player.GetVar("songSelector");
var jukeboxSelection = player.GetVar("jukeboxSelection");
var volume = player.GetVar("volume");

// add time elapsed in Storyline for each interaction
// var timeElapsed = player.GetVar("timeElapsed");
var statementInit = baseURI + employeeID;
var queryString = "https://watershedlrs.com/api/organizations/17583/lrs/statements";


const handleError = (response) => {
    console.log(response);
    if (!response.ok) {
        throw Error(response.status);
    } else {
        console.log(response);
        var statusCode = response.status;
        player.SetVar("statusCode", statusCode);
        player.SetVar("musicPrefsSaved", true);
        return response.json()

    }
};
const statement = {
    actor: {
        objectType: 'Agent',
        account: {
            homePage: 'http://www.crackerbarrel.com',
            name: employeeID
        }
    },
    verb: {
        id: 'https://activitystrea.ms/schema/1.0/save',
        display: {
            'en-US': 'Saved'
        },
    },
    object: {
        objectType: 'Activity',
        id: statementInit,
        definition: {
            name: {
                'en-US': 'Saved Arcade Music Preferences'
            },
            extensions: {
                "http://crackerbarrel.com/xapi/storyline/arcade/preferences": {
                    jukeboxSelection: jukeboxSelection,
                    songSelector: songSelector,
                    volume: volume
                }

            }
        }
    }
};
const auth = 'Basic ' + btoa('9874dcee4886d0:5a5f229977e295');
const uri = 'https://watershedlrs.com/api/organizations/17583/lrs/statements';
fetch(uri, {
    method: 'POST',
    headers: {
        'X-Experience-API-Version': '1.0.3',
        'Content-Type': 'application/json',
        'Authorization': auth,
    },
    body: JSON.stringify(statement)
})
    .then(handleError)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        switch (error.message) {
            case '400':
                console.log('bad request');
                break;
            case '401':
                console.log('unauthorized');
                break;
            case '500':
                console.log('server error');
                break;
            default:
                console.log('unhandled');
                break;
        }
    });

}

