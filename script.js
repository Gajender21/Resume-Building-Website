// alert("loading");
function addNewWEField(){
    
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter Here");


    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder',"Enter Here");


    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);   

}

//// Building CV

function buildCV(){
    console.log("building cv");
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    //Direct Setting

    document.getElementById('nameT2').innerHTML=nameField;

    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;

    //Important Links

    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;
    document.getElementById('portfolioT').innerHTML=document.getElementById('portfolioField').value;

    //Objective

    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    // Work  Experience

    let wes=document.getElementsByClassName('weField');
    let str="";
    for(let e of wes){
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;

    //Academic Qualification

    let aqs=document.getElementsByClassName('eqField');
    let str1="";
    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str1;

    //Skills
    
    let skl=document.getElementsByClassName('skillField');
    let str2="";
    for(let e of skl){
        str2=str2+`<li> ${e.value} </li>`;
    }
    document.getElementById('skillT').innerHTML=str1;


    //Selecting Photo

    let file=document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
   
    // Setting Photo to Tempelate

    reader.onloadend=function(){
    document.getElementById('imgT').src=reader.result;}


    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    }

    //Print CV
    function printCV(){
        window.print();
    }