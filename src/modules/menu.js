function showMenu(){
    let display = document.querySelector(".display");

    if (display.classList.contains("MENU")){
        console.log("jaj")
    }else{
        display.classList.remove("HOME")
        display.classList.remove("CONTACTEN")
        display.classList.remove("MENU")
        display.classList.add("MENU")

        display.innerHTML = " ";
        let div = document.createElement("div");
    
    
        div.classList.add("MENU")
        div.innerHTML = `    <div class="menu">
        <div class="flex-container">
         <div class="menu-item item8">
             <p>LecMozarel <br>
                15 EU
             </p>
         </div>
         <div class="menu-item item1">
           
             <p>LeCreveta <br>
                 10 EU
             </p>
         </div>
         <div class="menu-item item2"> <p>LeSalad <br>
            5 EU
         </p></div>
         <div class="menu-item item3"> <p>LeBeef <br>
             20 EU
         </p></div>
         <div class="menu-item item4"><p>LePáárno <br>
             500 EU
         </p></div>
         <div class="menu-item item5"><p>LeCake <br>
             5 EU
         </p></div>
         <div class="menu-item item6"><p>LeGyros<br>
             25 EU
         </p></div>
         <div class="menu-item item7"><p>LeMeloun <br>
             1 EU
         </p></div>
        </div>`
    display.appendChild(div)  
    }
}
export default showMenu