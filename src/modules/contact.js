function showContact(){
    

    let display = document.querySelector(".display");

    if (display.classList.contains("CONTACTEN")){
        console.log("jaj")
    }else{
        display.classList.remove("HOME")
        display.classList.remove("CONTACTEN")
        display.classList.remove("MENU")
        display.classList.add("CONTACTEN")

        display.innerHTML = " ";
        let div = document.createElement("div");
    
    
        div.classList.add("CONTACT")
        div.innerHTML = `  
        
        <div class="phone">
            <p>
                Adress: FKING OLYMMPUS </p>
           <p> Phone: 775 685 412 </p>    
                <p>Open time:  24/7 </p> 
               <p> Owner:  Zeus KING OF THE GODS


            </p>
        </div>
        <div class="map">
            <h2>Where to find us</h2>
            <img src="img/OLYMPUS.jpg" alt="">
        </div>
  `
    display.appendChild(div)  
    }



}
export default showContact