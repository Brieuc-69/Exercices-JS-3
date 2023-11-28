const motdepasse=document.querySelector('#password')
const confirmationmotdepasse=document.querySelector('#confirmPassword')
const verification=document.querySelector('button')
console.log(motdepasse,confirmationmotdepasse,verification)

verification.addEventListener('click', () =>{

if (motdepasse.value!==confirmationmotdepasse.value){
    
      motdepasse.style.border='3px solid red';
      confirmationmotdepasse.style.border='3px solid red';

  

    
    
    

}else{
    motdepasse.style.border='3px solid green';
    confirmationmotdepasse.style.border='3px solid green';
}})