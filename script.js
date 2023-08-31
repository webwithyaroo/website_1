var theButton =document.querySelectorAll(".buy");
for( const theBtn of theButton){
    theBtn.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(".active").classList.remove('active')
        theBtn.classList.add("active");
    })
}