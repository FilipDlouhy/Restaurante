function showHome(){
    

    let display = document.querySelector(".display");

    if (display.classList.contains("HOME")){
        console.log("jaj")
    }else{
        display.classList.remove("HOME")
        display.classList.remove("CONTACTEN")
        display.classList.remove("MENU")
        display.classList.add("HOME")

        display.innerHTML = " ";
        let div = document.createElement("div");
    
    
        div.classList.add("home")
        div.innerHTML = `<p class="about-us">
        We have made food wich wil grant you power of hecules, intelect of Hera, and looks of man who vypádá stále kurwa dobře Phillipe Augustus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim possimus, cumque voluptatum debitis alias sint necessitatibus eius velit quo molestiae?
    </p>`
    display.appendChild(div)  
    }



}
export default showHome