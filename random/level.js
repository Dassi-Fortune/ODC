const level = localStorage.getItem("level")
let min = 1
let max = 0
if (level == 1){
    max = 100
}else if(level == 2){
    max= 1000
}else if (level == 3){
    max= 10000
}


const levelSelection = (e) => {
    e.preventDefault();
    var getSelectedLevel = document.querySelector("input[name='level']:checked");
    if (getSelectedLevel !=null){
        console.log(getSelectedLevel.value);

    } else {
        alert("please select a level");
    }
}