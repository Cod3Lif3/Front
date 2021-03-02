//DECLARATION DES VARIABLES
let aff = document.getElementById("affichage");
let fpbtn = document.getElementById("fp-btn");
let fraisbtn = document.getElementById("frais-btn");
let facturebtn = document.getElementById("fact-btn");
let nbElm = document.createElement("h2");


//When the user click on the "Fiche de paie" button
fpbtn.addEventListener('click', () =>{
    //get access to all the data  from the api
    fetch("https://secure.askolga.fr/bucket/dfd8d3e2deec487f8e164587a5a3746a62af1c04cf33b78bfa4611623de93d7a5fead88d4f362/search/994e4946e88637172b55b2da7b4292cd4c328907d7af43bf039755cf751565b05fead93d1a713-show.json")
.then(response => response.json())//we recover the data in json format
.then(response => {
    aff.innerHTML = ""; // we empty our div
    aff.appendChild(nbElm);
    nbElm.innerHTML = Object.keys(response.documents).length + " documents trouvés"; //transform the object recover into an array with the method keys() and get the size of the array
    for(let i=0;i<Object.keys(response.documents).length;i++){// A loop starting at 0 and finish at the array size -1
        var maDiv = document.createElement("div");// for each element in the array we create a new div
        if(i%2 == 0){//this condition change the background color of our div for all the "i" pair
            maDiv.style.backgroundColor = "#304677";
        }
        maDiv.classList.add("paie"); //add a class for each div create by the loop
        maDiv.id = "paieNum"+ i;// add an id for each div create by the loop
        aff.appendChild(maDiv);// all the div create by the loop is a child of our div "affichage"
        maDiv.innerHTML= Object.values(response.documents)[i].filename;// display the filename in the div 
        maDiv.style.padding = "10px 0 10px 0";
        maDiv.style.borderBottom = " solid 1px white";
    }
})
.catch(error => alert("Erreur" + error));//check that the promise is solved

})
//When the user click on the "Frais" button
fraisbtn.addEventListener('click', () =>{
    //get access to all the data  from the api
    fetch("https://secure.askolga.fr/bucket/dfd8d3e2deec487f8e164587a5a3746a62af1c04cf33b78bfa4611623de93d7a5fead88d4f362/search/76804f262f5d50c86a9354157781d0f22ccfe9223b1e768c26e3b97892d3fccb5feb5aaa4e94a-show.json")
.then(response => response.json())//we recover the data in json format
.then(response => {
    aff.innerHTML = "";// we empty our div
    nbElm.classList.add("nbElm");//add a class to our h2
    aff.appendChild(nbElm);// our h2 is a child of the div "affichage"
    nbElm.innerHTML = Object.keys(response.documents).length + " documents trouvés";//transform the object recover into an array with the method keys() and get the size of the array
    for(let i=0;i<Object.keys(response.documents).length;i++){// A loop starting at 0 and finish at the array size -1
        var maDiv = document.createElement("div");// for each element in the array we create a new div
        if(i%2 == 0){//this condition change the background color of our div for all the "i" pair
            maDiv.style.backgroundColor = "#304677";
        }
        maDiv.classList.add("frais"); //add a class for each div create by the loop
        maDiv.id = "fraisNum"+ i;// add an id for each div create by the loop
        aff.appendChild(maDiv);// all the div create by the loop is a child of our div "affichage"
        maDiv.innerHTML= Object.values(response.documents)[i].filename;// display the filename in the div 
        maDiv.style.padding = "10px 0 10px 0";
        maDiv.style.borderBottom = " solid 1px white";
    }
})
.catch(error => alert("Erreur" + error));//check that the promise is solved

})
//When the user click on the "Frais" button
facturebtn.addEventListener('click', () =>{
    //get access to all the data  from the api
    fetch("https://secure.askolga.fr/bucket/dfd8d3e2deec487f8e164587a5a3746a62af1c04cf33b78bfa4611623de93d7a5fead88d4f362/search/8a3e5963938c016d5be1f96a13ba59b030799b5b3626080109ae25c71f6bd8795feb65016f432-show.json")
.then(response => response.json())//we recover the data in json format
.then(response => {
    aff.innerHTML = "";// we empty our div
    nbElm.classList.add("nbElm");//add a class to our h2
    aff.appendChild(nbElm);// our h2 is a child of the div "affichage"
    nbElm.innerHTML = Object.keys(response.documents).length + " documents trouvés";//transform the object recover into an array with the method keys() and display the size of the array
    for(let i=0;i<Object.keys(response.documents).length;i++){// A loop starting at 0 and finish at the array size -1
        var maDiv = document.createElement("div");// for each element in the array we create a new div
        if(i%2 == 0){//this condition change the background color of our div for all the "i" pair
            maDiv.style.backgroundColor = "#304677";
        }
        maDiv.classList.add("facture");//add a class for each div create by the loop
        maDiv.id = "factureNum"+ i;// add an id for each div create by the loop
        aff.appendChild(maDiv);// all the div create by the loop is a child of our div "affichage"
        maDiv.innerHTML= Object.values(response.documents)[i].filename;// display the filename in the div
        maDiv.style.padding = "10px 0 10px 0";
        maDiv.style.borderBottom = " solid 1px white";
    }
})
.catch(error => alert("Erreur" + error));

})



