const names = []
const showNames = document.getElementById('showNamesList')
// console.log(showNames)

// const newName = document.getElementById('newName').innerText
// console.log(newName)
const showListNames = function(name){
    let colName = document.createElement('div')
    colName.classList.add('col')
    let pName = document.createElement('p')
    pName.innerText = name
    colName.appendChild(pName)
    showNames.appendChild(colName)
    console.log(showNames)
}

const getName = function(){
    let name = document.getElementById('newName').value
    names.push(name)
    document.getElementById('newName').value = ''
    // console.log(names)
    showListNames(name)
}

const generateTeam = function(numteams){
    let team = []
    for(let j=0; j<numteams; j++){
        for(let i=0; i<names.length/numteams; i++){
            let rand = Math.floor(Math.random() * names.length)
            team[j].push(names[rand])
        }
    }
}

