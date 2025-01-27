function defaultSetting(){
    document.getElementById('body').style = "background-color: #fcf6d7";
    document.getElementById('header1').style = "background-color: #d77e70";
    document.getElementById('header2').style = "background-color: #d77e70";
   }

function dark(){
    document.getElementById('body').style = "background-color: #0b0701; color: #fdfdfe";
    document.getElementById('header1').style = "background-color: #333397";
    document.getElementById('header2').style = "background-color: #333397";
    // document.getElementById('body').style = "color: #fdfdfe";
   }

function light(){
    document.getElementById('body').style = "background-color: #fdfdfc";
    document.getElementById('header1').style = "background-color: #feb082";
    document.getElementById('header2').style = "background-color: #feb082";
   }

//Calculations page
function perimeter(){
    let plength = document.getElementById('plength').value;
    let pwidth = document.getElementById('pwidth').value;
    let Rperimeter = 2*(Number(plength)+Number(pwidth));
    document.getElementById('perimeterResult').innerHTML = Rperimeter;
}

function area(){
    let alength = document.getElementById('alength').value;
    let awidth = document.getElementById('awidth').value;
    let Rarea = Number(alength)*Number(awidth);
    document.getElementById('areaResult').innerHTML = Rarea;
}

function volume(){
    let vlength = document.getElementById('vlength').value;
    let vwidth = document.getElementById('vwidth').value;
    let vheight = document.getElementById('vheight').value;
    let Rvolume = Number(vlength)*Number(vwidth)*Number(vheight);
    document.getElementById('volumeResult').innerHTML = Rvolume;
}