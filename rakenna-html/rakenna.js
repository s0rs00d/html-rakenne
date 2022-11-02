const runko = document.getElementsByTagName("body")[0]
const otsikko = document.createElement("header")
otsikko.setAttribute("class", "ylatunniste")

runko.appendChild(otsikko)

const hooykkonen = document.createElement("h1")
const text = document.createTextNode("Tämä on artikkelin otsikko")
otsikko.appendChild(hooykkonen)
hooykkonen.appendChild(text)

const headerPee = document.createElement("p")
const text2 = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat  eaque asperiores magnam rerum explicabo amet nulla officia velit voluptatum nihil!")
otsikko.appendChild(headerPee)
headerPee.appendChild(text2)


const sectionPee = document.createElement("section")
sectionPee.setAttribute("id", "rinnakkain")
runko.appendChild(sectionPee)
const text3 = document.createElement("p")
const node3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur voluptas in consequuntur ducimus ut eligendi laborum nisi est quaerat?")
text3.appendChild(node3)
sectionPee.appendChild(text3)

const figurePee = document.createElement("figure")
figurePee.setAttribute("id", "kuvanpaikka")

var img = document.createElement("img")
img.src = "./kuvake.gif"
figurePee.appendChild(img)
sectionPee.appendChild(figurePee)

const footeri = document.createElement("footer")
const text4 = document.createElement("p")
const node4 = document.createTextNode("@ 2022 Otto Huusko")
text4.appendChild(node4)
footeri.appendChild(text4)
runko.appendChild(footeri)

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



// var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
// var src = document.getElementById("header");
// src.appendChild(img);
// const runko = document.getElementsByTagName("body")[0]
// const osa = document.createElement("div")
// osa.setAttribute("id", "div1")

// runko.appendChild(osa)

// const tagi = document.createElement("p")
// tagi.setAttribute("id", "p1")
// const text = document.createTextNode("Tämä on 1.kappaleen teksti")
// osa.appendChild(tagi)
// tagi.appendChild(text)

// const tagi2 = document.createElement("p")
// tagi2.setAttribute("id", "p2")
// const text2 = document.createTextNode("Tämä on 2.kappaleen teksti")
// osa.appendChild(tagi2)
// tagi2.appendChild(text2)

// const tagi3 = document.createElement("p")
// tagi3.setAttribute("id", "p3")
// const text3 = document.createTextNode("Tämä on 3.kappaleen teksti")
// osa.appendChild(tagi3)
// tagi3.appendChild(text3)