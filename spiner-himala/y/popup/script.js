

  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
 

  })

  function showPopup(){
        const timeLimit = 1 // seconds;
        let i=1;
        const timer =   setTimeout(()=>{
          clearInterval(timer);
          loginPopup.classList.add("show");
         },200)
    }
  


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })
