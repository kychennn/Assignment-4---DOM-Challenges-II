// Question 1
document.querySelector('.button1').addEventListener('click',function(){
  document.querySelector('.q1text').textContent = "I'm right";
})

document.querySelector('.button2').addEventListener('click',function(){
  document.querySelector('.q1text').textContent = "No, I'm right!";
})

//Question 2
document.querySelector('.q2text').addEventListener('mouseover', function(){
  alert("Hey, I told you not to hover over me!");
})


//Question 4
document.querySelector('.submit').addEventListener('click', function(){
  //let pw = document.querySelector('.password').textContent
  if (document.querySelector('.password').value != '12345678'){
    alert("The password is incorrect! Please enter again!");
  }
  else{
    alert("The password is correct!");
  }
})

// Question 5
document.querySelector('.submit6').addEventListener('click', function(){
  let r = document.querySelector('.radius').value;
  let volume = 4/3 * Math.PI * r * r * r;
  document.querySelector('.result').textContent = "The volume of the sphere is "+ volume;
})
