var icon = document.getElementById("icon");
var dropdown = document.getElementById("dropdown");

icon.onclick = iconClicked; 

function iconClicked () {

    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
        icon.style.color = "white";
    } else {
        dropdown.style.display = "none";
        icon.style.color = "#3F3E3E";
    }
    
}