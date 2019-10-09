function todo(){
    var form = document.getElementById("FormInput").value;
    let uol = document.getElementById('uil');
    let liu = document.createElement("li");
    liu.innerHTML = form;
    console.log(form);
    uol.appendChild(liu);
    
   

}
let bit = document.getElementById("nutton");
bit.addEventListener('click', todo, false);