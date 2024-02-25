var icon = document.getElementById("icon");

if(localStorage.getItem("theme")== "null"){
  localStorage.setItem("theme", "light");  
}



let localData = localStorage.getItem("theme");
if (localData =="light") {
    icon.src ="icon/moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
    icon.src = "icon/sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "icon/sun.png";
        localStorage.setItem("theme", "dark");
    }
    else{
        icon.src ="icon/moon.png"
        localStorage.setItem("theme", "light");
    }
}