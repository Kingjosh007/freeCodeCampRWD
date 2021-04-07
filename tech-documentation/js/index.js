window.onclick = function(e) { 

  // Handling click on nav-link;
  if(e.target.className.includes("nav-link"))
  {
    let allLinks = document.querySelectorAll(".nav-link");
    for(let i=0; i<allLinks.length; i++)
    {
      allLinks[i].classList.remove("activated");
    }
    e.target.classList.toggle("activated");
  }
      
};