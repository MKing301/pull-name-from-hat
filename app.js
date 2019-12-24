var namesInHat = []
var namesPulled = []


//Change first letter of each name to uppercase
function titleCase(str) {
    var lowerCaseStr = str.toLowerCase();
    var word_list = lowerCaseStr.split(" ")
    for (var i = 0; i < word_list.length; i++) {
        word_list[i] = word_list[i].charAt(0).toUpperCase() + word_list[i].substring(1);
    }
    return word_list.join(' ');

};


// Add name to "hat"
function ButtonClick_Add(){
    document.getElementById("name").value = titleCase(document.getElementById("name").value).trim();
    if(document.getElementById("name").value === ''){
        alert('Name Required!')
        document.getElementById('name').value = '';
    } else if(namesInHat.includes(document.getElementById("name").value)) {
        alert('Name already added!')
        document.getElementById('name').value = '';
    }
    else {
        var ul = document.getElementById("hatList");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(document.getElementById("name").value));
        li.setAttribute("id", document.getElementById("name").value); // added line
        ul.appendChild(li);
        namesInHat.push(document.getElementById("name").value);
        document.getElementById('name').value = '';
    }
};


// Pull name from hat and add it to the pulled name list
function ButtonClick_Pull(){
    var ul = document.getElementById("pulledList");
    if(namesInHat.length < 2){
        alert('Min: 2 required')
        document.getElementById('name').value = '';
    }
    else if(namesInHat.length === 0) {
        alert('Min: 2 required')
        document.getElementById('name').value = '';
    }
    else {
        //Get random number from list length
        var randomNumber = Math.floor(Math.random()*namesInHat.length);
        var thePulledName = namesInHat[randomNumber];
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(thePulledName));
        li.setAttribute("id", thePulledName); // added line
        ul.appendChild(li);
        namesPulled.push(thePulledName)
        var deleteName = document.getElementById("hatList");
        var deleteNameNested = document.getElementById(thePulledName);
        deleteName.removeChild(deleteNameNested);
        namesInHat.splice(randomNumber, 1);
    }
};


// Clear the pulled names list and place them back in the hat
function ButtonClick_Clear(){
    var ul = document.getElementById("pulledList");
    pulledList.innerHTML = '';
    var ul = document.getElementById("hatList");
    for(let i = 0; i < namesPulled.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(namesPulled[i]));
        li.setAttribute("id", namesPulled[i]); // added line
        ul.appendChild(li);
        namesInHat.push(namesPulled[i]);
    }
    namesPulled = [];
    document.getElementById('name').value = '';
};


// Reset the application, clear both the names in the hat and the
//pulled names
function ButtonClick_Reset(){
    var ul = document.getElementById("hatList");
    hatList.innerHTML = '';
    namesInHat = [];
    var ul = document.getElementById("pulledList");
    pulledList.innerHTML = '';
    namesPulled = [];
    document.getElementById('name').value = '';
};