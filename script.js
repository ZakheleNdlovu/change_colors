let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')
let b4 = document.getElementById('b4')
let b5 = document.getElementById('b5')
let b6 = document.getElementById('b6')
let box = document.getElementById('box')
let heading = document.getElementById('h1')

b1.addEventListener('click',()=>{
    box.style.backgroundColor = 'black'
    heading.style.color = 'white'
    heading.innerHTML = 'BLACK'
    heading.style.textShadow = '2px 0px 10px red'
})

b2.addEventListener('click',()=>{
    box.style.backgroundColor = 'yellow'
    heading.style.color = 'black'
    heading.innerHTML = 'YELLOW'
    heading.style.textShadow = '2px 0px 10px black'
})

b3.addEventListener('click',()=>{
    box.style.backgroundColor = 'red'
    heading.style.color = 'black'
    heading.innerHTML = 'RED'
    heading.style.textShadow = '2px 0px 10px black'
})

b4.addEventListener('click',()=>{
    box.style.backgroundColor = 'rgb(0, 217, 255)'
    heading.style.color = 'black'
    heading.innerHTML = 'TURQUOISE'
    heading.style.textShadow = '0px 0px 10px black'
})

b5.addEventListener('click',()=>{
    box.style.backgroundColor = 'rgb(0, 255, 55)'
    heading.style.color = 'black'
    heading.innerHTML = 'GREEN'
    heading.style.textShadow = '2px 0px 10px black'
})

b6.addEventListener('click',()=>{
    box.style.backgroundColor = 'rgb(247, 0, 255)'
    heading.style.color = 'black'
    heading.innerHTML = 'PURPLE'
    heading.style.textShadow = '0px 0px 10px black'
})

b7.addEventListener('click',()=>{
    box.style.backgroundColor = 'rgb(0, 12, 180)'
    heading.style.color = 'black'
    heading.innerHTML = 'BLUE'
    heading.style.textShadow = '2px 0px 10px black'
})

b8.addEventListener('click',()=>{
    box.style.backgroundColor = 'rgb(255, 174, 0)'
    heading.style.color = 'black'
    heading.innerHTML = 'ORANGE'
    heading.style.textShadow = '0px 0px 10px black'
})

