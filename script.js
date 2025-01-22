function defaultSetting(){
    alert("Changed to Default Theme")
    document.getElementById('body').style = "background-color: #fcf6d7";
    document.getElementById('header1').style = "background-color: #d77e70";
    document.getElementById('header2').style = "background-color: #d77e70";
   }

function dark(){
    alert("Changed to Dark Theme")
    document.getElementById('body').style = "background-color: #0b0701; color: #fdfdfe";
    document.getElementById('header1').style = "background-color: #333397";
    document.getElementById('header2').style = "background-color: #333397";
    // document.getElementById('body').style = "color: #fdfdfe";
   }

function light(){
    alert("Changed to Light Theme")
    document.getElementById('body').style = "background-color: #fdfdfc";
    document.getElementById('header1').style = "background-color: #feb082";
    document.getElementById('header2').style = "background-color: #feb082";
   }