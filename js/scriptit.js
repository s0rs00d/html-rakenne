const runko = document.getElementsByTagName("body")[0]
const osa = document.createElement("div")
osa.setAttribute("id", "div1")

runko.appendChild(osa)

const tagi = document.createElement("p")
tagi.setAttribute("id", "p1")
const text = document.createTextNode("Tämä on 1.kappaleen teksti")
osa.appendChild(tagi)
tagi.appendChild(text)

const tagi2 = document.createElement("p")
tagi2.setAttribute("id", "p2")
const text2 = document.createTextNode("Tämä on 2.kappaleen teksti")
osa.appendChild(tagi2)
tagi2.appendChild(text2)

const tagi3 = document.createElement("p")
tagi3.setAttribute("id", "p3")
const text3 = document.createTextNode("Tämä on 3.kappaleen teksti")
osa.appendChild(tagi3)
tagi3.appendChild(text3)



// const para = document.createElement("p")

// const node = document.createTextNode("This is new paragraph")

// para.appendChild(node)

// const element = document.getElementById("div1")

// element.appendChild(para)

// const otsikko = document.getElementsByTagName("body")[0]
// const hooyks = document.createElement("h1")
// const node2 = document.createTextNode("Uusi 1. tason otsikko") 
// hooyks.appendChild(node2)
// otsikko.appendChild(hooyks)

