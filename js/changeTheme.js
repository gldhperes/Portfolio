let darkModeButton = document.getElementById("toggle-dark")
let toggle = document.getElementById("toggle")
let moon = $("#moon");
let sun = $("#sun");

// First Run Checks the Theme(dark or light) and the Input.checked
// Then, toggle the correct for Theme
console.log(localStorage.getItem("data-theme"))


const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    moon.css("display","block")
    sun.css("display","none")
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
    moon.css("display","none")
    sun.css("display","block")
}

let _theme = localStorage.getItem('data-theme');
if (_theme == 'dark') changeThemeToDark();
if (_theme == 'light') changeThemeToLight();

if(_theme == "dark"){       
    darkModeButton.checked = true;
}else if(_theme == "light"){
    darkModeButton.checked = false;
}

toggle.addEventListener("click", () => {
    let theme = localStorage.getItem("data-theme");

    if(!darkModeButton.checked){
        darkModeButton.checked = true;
    }else{
        darkModeButton.checked = false;
    }

    
    if(darkModeButton.checked){
        changeThemeToDark();
    
    }else{
        changeThemeToLight();
    } 

    console.log(darkModeButton.checked)
    console.log(localStorage.getItem("data-theme"))    
});