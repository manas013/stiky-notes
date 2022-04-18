console.log('tutai')
showNotes();
// if a user add note add it local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");//give item from local storage
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    console.log(notesObj);
    showNotes();
})
//funtion to show local element
function showNotes() {
    let notes = localStorage.getItem("notes");//give item from local storage
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";//create blank string
    notesObj.forEach(function (element, index) {//html=html+   this call means paste in notes
        html += `
        <div class="notecard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element + 1}</p>
          <button id="${index}"onclick="deleteNode(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>
      `;

    });
    let notesEl = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesEl.innerHTML = html;
    }
    else{
        notesEl.innerHTML=`nothing to ahow use add node section`
    }

}
//funtion delete node
//use array index
function deleteNode(index){
    console.log('deleting');
    let notes = localStorage.getItem("notes");//give item from local storage
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));//remove value start index use splice
    showNotes();


}
//function for search
let search = document.getElementById('search');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})