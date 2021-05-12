const button = document.querySelectorAll('.but')
const textArea = document.querySelector('.text-area')
let newH1 = document.createElement('div')
newH1.classList.add('screen')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
textArea.appendChild(newH1) 
var collec=[];
console.log("helo")

for(const item of button){
    item.addEventListener('click',function(e){
     var str = e.target.innerText
     if(str =='='|| str == 'clear'){
         str = ''
     }
     collec.push(str)
     let value = collec.join()
     let strjoin = value.replace (/,/g, '')
     console.log(strjoin)
     newH1.innerText = strjoin

    })
}
equal.addEventListener('click',function(e){
    console.log("Event loop works")
    value1 = newH1.innerText
    newH1.innerText = eval(value1)
})
clear.addEventListener("click",function(e){
    newH1.innerText = ' '
    collec = []
})


