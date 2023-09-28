
document.getElementById('add_btn').addEventListener('click', () => {
    const txt = document.getElementById('inputText').value;

    if(txt === ""){
        document.getElementById('ulList').children[0].textContent = "Please enter a chapter name";
        return;
    }

    let newLi = document.createElement('li');
    newLi.classList.add('list-group-item');
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `<h5 class="flex-grow-1">${txt}</h5>
                        <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
                        <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>
                        `;
    document.getElementById('inputText').value="";
    document.getElementById('ulList').children[0].textContent = "";
    document.getElementById('ulList').appendChild(newLi);
});

function removeChapter(btn) {
    btn.parentElement.remove();
    if(document.getElementById('ulList').children.length === 1)
        document.getElementById('ulList').children[0].textContent = "There is no chapter added yet.";
}

function editChapter(btn){
    let txtcontent = btn.previousElementSibling;
    // <input type="text" id="inputText" class="form-control" placeholder="Chapter Name" aria-label="Chapter Name" aria-describedby="button-addon2" required></input>
    let inPut = document.createElement('input');
    inPut.type = "text";
    inPut.id = "inputText";
    inPut.className = "form-control";
    inPut.placeholder = "Chapter Name";
    inPut.value = txtcontent.textContent;

    //changing the button to done
    btn.textContent = "Done";
    
    //selecting the parent element
    let parent = btn.parentElement;
    parent.replaceChild(inPut, txtcontent);
    //idk even after replacing the txtcontent with inPut, the inPut is not having any parent element or its not a child of parent element


    if(inPut.value !== ""){
        btn.addEventListener('click', () => {
            txtcontent.textContent = inPut.value;
            btn.textContent = "Edit";
            // console.log(parent);
            parent.replaceChild(txtcontent, parent.children[0]);
        });
        // delete inPut;
    }
    else{
        inPut.placeholder = "chapter name";
    }
}

