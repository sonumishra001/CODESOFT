let input_box = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

buttons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{

        if(e.target.innerText == '=' & input_box.value=='' ){
            input_box.value = ''
            navigator.vibrate(100)
        }
        
        else if(e.target.innerText == '=' ){
            navigator.vibrate(50)
             input_box.value = eval(input_box.value)

        } 
        else if(e.target.innerText == 'AC'){
            navigator.vibrate(50)
            input_box.value = ''

        } else if(e.target.innerText == 'DEL'){
            navigator.vibrate(50)
            input = String(input_box.value)
            input_box.value = input.slice(0,-1)
        } else{
            input_box.value += e.target.innerText
        }
    })
})