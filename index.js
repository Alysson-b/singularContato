const next = document.querySelector('.btn-next')
const reagendar = document.querySelector('.btn-Reagendar')
const aceita = document.querySelector('.btn-confirmar')
const div = document.querySelector('.line')
const message = document.createElement('p')
const page1 = document.querySelector('.section1')
const page2 = document.querySelector('.section2')
const page3 = document.querySelector('.section3')
const page4 = document.querySelector('.section4')
const msgWhats = document.querySelector('#Whatsapp')
const divName = document.querySelector(".name-user")
const inputName = document.createElement('h2')

next.addEventListener('click', function(e){
   e.preventDefault();
   
   const name = document.querySelector('.name').value.trim()
   const number = document.querySelector('.whats').value.trim()

   message.innerHTML = "";

   if(name === "" || number === "" ){
      message.innerHTML = 'Campos Obrigatorios'
      message.style.color = '#ff4545'
   }
   else if(isNaN(number) || number.length < 10){ 
      message.innerHTML = "Numero inválido."
      message.style.color = '#ff4545'
   }
   else{
      inputName.textContent = name;
      divName.innerHTML = "";
      divName.appendChild(inputName)

      
      page1.style.display = "none"
      page2.style.display = "flex"
      


   }
   div.appendChild(message)
})

aceita.addEventListener('click', function(){
   page2.style.display = 'none'
   page3.style.display = 'flex'
})

reagendar.addEventListener('click', function(){
   page2.style.display = 'none'
   page4.style.display = 'flex'
})

msgWhats.addEventListener('click', function(){
   const telefone = "5585996939576"
   const whatsMsg = "Por favor, gostaria de Reagendar minha consulta."
   const whatsURL = `https://wa.me/${telefone}?text=${encodeURIComponent(whatsMsg)}`
   window.location.href = whatsURL;
})
