const inp = document.getElementById('inp');
const feed = document.getElementById('feed');
const button = document.getElementById('button');
//A jao bhaion jaldi jaldi feed jaldi qadam chalao

let editTarget = null; // chokhe aqalmand
// dont copy my code, YOU YES YOU
function addPost() {
     const text = inp.value.trim();

     if (text === "") {
          alert("WRITE FIRST! **Creeper blasts** _shodjfiughtjt_");
          return;
          // khabardaar kisi ne galat dali to!!!!!!!!!!!!!!!!!!!!!
     }

     if (editTarget !== null) {
          editTarget.firstChild.textContent = text + " ";

          button.textContent = "+ Post"; // kaisa laga
          editTarget = null;
     }

     else {
          const box = document.createElement('div');
          box.className = 'box'; // chaal hai bhai!! Apna UI is best
          box.textContent = text + " ";

          const buttonsDiv = document.createElement('div');
          buttonsDiv.className = 'buttons';

          const editBtn = document.createElement('button');
          editBtn.textContent = '✎';
          editBtn.onclick = function () { editPost(box); };

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = '❌';
          deleteBtn.onclick = function () { deletePost(box); };

          buttonsDiv.appendChild(editBtn);
          buttonsDiv.appendChild(deleteBtn);
          box.appendChild(buttonsDiv);

          feed.prepend(box);
     }

     inp.value = "";
     // ab comments bhi likhne bethun?
}

function editPost(postBox) {
     inp.value = postBox.firstChild.textContent.trim();

     button.textContent = "✓ Update";

     editTarget = postBox;
     inp.focus();
}

function deletePost(postBox) {
     postBox.remove();
}

// why r u reading thi?????