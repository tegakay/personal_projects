//adding form value to list
/* class form{
    static addForm(){
        var form = document.getElementById("FormInput").value;
    let uol = document.getElementById('uil');
    let liu = document.createElement("li");
      liu.innerHTML = `<p>${form} &nbsp <button class="btn btn-danger btn-sm del">X</button></p><hr>`;
    console.log(liu);
    uol.appendChild(liu);
    document.getElementById("FormInput").value = " "
    }
    //deleteabook
    static deleteEntry(el){
        if(el.classList.contains('del')){
            console.log(el.classList);
            el.parentElement.parentElement.remove();
        }
    }
    
}
// Event add book
let bit = document.getElementById("nutton");
bit.addEventListener('click', form.addForm, false);

//Remove book
document.querySelector('#uil').addEventListener('click',(e)=>{
    form.deleteEntry(e.target)});

*/
    function addNote (){
        let form = document.getElementById("FormInput").value;
        let uol = document.getElementById('uil');
        let liu = document.createElement("li");
          liu.innerHTML = `<p>${form} &nbsp <button class="btn btn-danger btn-sm del">X</button></p><hr>`;
        
    }
