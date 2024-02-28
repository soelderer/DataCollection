/* MAKE CHANGES: start*/
/* default values */
var config = {
    CAMproject: "projectName", // "proj_" + uuid.v4(), // necessary for server (see ERM)
    ConNumNodes: 10, // number of nodes necessary to draw
    
    hideArrows: false, // if false = possible to draw arrows
    BidirectionalDefault: true, // if true the default connection is bidirectional

    hideAmbivalent: false, // if false = possible to draw ambivalent node
    showOnlyPosSlid: false, // if true = show only slider for agreement (+1 - +3)
    
    MaxLengthWords: 3, // maximum number of words for each concept
    MaxLengthChars: 40, // maximum number of characters for each concept
    LengthSentence: 20, // include breaklines if >= X characters
    LengthWords: 8, // include breaklines after each word with cumsum >= X characters

    ShowResearcherButtons: true, // if true = show researcher functionalities

    cameraFeature: false, // include camera / splotlight feature to move screen

    setLanguage: "English", // set language of your CAM study, e.g. French 

    fullScreen: false, // if true = study in fullscreen mode + paradata
    showNotPopupStart: true, // true = no pop up shown; only working if fullScreen is set to true

    AdaptiveStudy: true, // run as adaptive study 
    ADAPTIVESTUDYurl: "http://example.org/", // URL the CAM data should be append to

    setReminder: false, // if true = after X ms 2 reminder pop up

    surpressSaveCAMpopup: false, // if set to true no popup is shown when downloading a vector graphic of the CAM (for automation via the CAM2Image tool)

    // enableConnectorLabels: false // if true, edges can be labeled with arbitrary text
    enableConnectorLabels: false, // if true, edges can be labeled with arbitrary text
    onlyPredefinedConnectorLabels: false, // if true, connections can be labeled only with pre-defined labels
    predefinedConnectorLabels: new Array() // an Array for the pre-defined connector labels
}

// global variable
var usingMangoDB = false;
var usingJATOS = false;
/* MAKE CHANGES: end*/

console.log("config config file:", config)





// ! not change
const webAddress = "https://drawyourminds.de/API/"; // "https://drawyourminds.de/API/"; // "http://localhost:3001/"; 


