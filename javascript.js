const names = []
const allTeams = []
const showNames = document.getElementById('showNamesList')
const showTeams = document.getElementById('showTeams')
// console.log(showNames)

window.onload = function(){
    names.splice(0, names.length)
    showNames.innerHTML = ''
    showTeams.innerHTML = ''
    console.log('page loaded')
}
// const newName = document.getElementById('newName').innerText
// console.log(newName)
const showListNames = function(name){
    let colName = document.createElement('div')
    colName.classList.add('col')
    let pName = document.createElement('p')
    pName.innerText = name
    colName.appendChild(pName)
    showNames.appendChild(colName)
    // console.log(showNames)
}

const getName = function(){
    let name = document.getElementById('newName').value
    names.push(name)
    document.getElementById('newName').value = ''
    // console.log(names)
    showListNames(name)
}

// This function receives 2 parameters and returns an element tag
//      ele ->  Tag element desired
//      clas -> class to be added to the tag element 
const createElement = function(ele, clas){
    let divEle = document.createElement(ele)
    // for(let i=0; i<clas.length; i++){
        divEle.classList.add(clas)
    // }
    return divEle
}

const generateTeam = function(){
    let numTeams = parseInt(document.getElementById('numTeams').value)
    console.log(numTeams)
    let temp = names.length/numTeams

    for(let j=0; j<numTeams; j++){

        let colCard = createElement('div', 'col')
        colCard.classList.add('my-2')

        let card = createElement('div', 'card')

        let cardHeader = createElement('div', 'card-header')
        cardHeader.innerText = `Team - ${j + 1}`
        card.appendChild(cardHeader)

        let cardBody = createElement('div', 'card-body')

        let cardUl = createElement('ul', 'list-group')
        cardUl.classList.add('list-group-flush')
        // let team = []
        for(let i=0; i<temp; i++){
            let rand = Math.floor(Math.random() * names.length)

            let listItem = createElement('li', 'list-group-item')
            listItem.innerText = names[rand]
            cardUl.appendChild(listItem)

            // team.push(names[rand])
            names.splice(rand, 1)
            // console.log(rand)
        }
        cardBody.appendChild(cardUl)
        // allTeams[j] = team
        // console.log(rand)
        let removeButton = createElement('a', 'btn')
        removeButton.classList.add('btn-primary')
        removeButton.innerText = 'Remove'
        removeButton.addEventListener('click', removeMember)

        cardBody.appendChild(removeButton)
        card.appendChild(cardBody)
        colCard.appendChild(card)

        showTeams.appendChild(colCard)
    }
    // console.log(allTeams)
    showNames.innerHTML = ''
}

const removeMember = function(event){
    let parentUl = event.currentTarget.parentElement
    let ul = parentUl.children[0]
    let lastMember = ul.lastElementChild
    names.push(lastMember.innerText)
    // showNames.innerHTML = ''
    showListNames(lastMember.innerText)
    lastMember.remove()
    if(ul.children.length === 0){
        parentUl.closest('.col').remove()
    }
    // console.log(ul.children.length)
    
}

// let colCard = document.createElement('div')
// colCard.classList.add('col')
// colCard.classList.add('my-2')

// let card = document.createElement('div')
// card.classList.add('card')

// let cardHeader = document.createElement('div')
// cardHeader.classList.add('card-header')
// cardHeader.innerText = `Team` //`Team ${j}`
// card.appendChild(cardHeader)

// let cardBody = document.createElement('div')
// cardBody.classList.add('card-body')

// let cardUl = document.createElement('ul')
// cardUl.classList.add('list-group')
// cardUl.classList.add('list-group-flush')

// let listItem = document.createElement('li')
// listItem.classList.add('list-group-item')
// listItem.innerText = names //names[rand]
// cardUl.appendChild(listItem)

// cardBody.appendChild(cardUl)

// let removeButton = document.createElement('a')
// removeButton.classList.add('btn')
// removeButton.classList.add('btn-primary')
// removeButton.innerText = 'Remove'
// cardBody.appendChild(removeButton)

// card.appendChild(cardBody)

// colCard.appendChild(card)

// showTeams.appendChild(colCard)

// This function receives 2 parameters and returns an element tag
//      ele ->  Tag element desired
//      clas -> class to be added to the tag element 
// const createElement = function(element, addClass){
//     let divEle = document.createElement(element)
//     for(let i=0; i<addClass.length; i++){
//         divEle.classList.add(addClass[i])
//     }
//     return divEle
// }