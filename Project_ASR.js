let themeNumber = 0;

const noteList = [];

function themePicker() {
    switch (themeNumber) {
        case 0:
            setTheme('black', 'white');

            themeNumber++;

            break;
        case 1:
            setTheme('white', 'black');

            themeNumber++;

            break;
        case 2:
            setTheme('#ffc0b9', 'white');

            themeNumber++;

            break;
        case 3:
            setTheme('#b1eed0', 'black');
            themeNumber = 0;
            break;
    }
}

/**

 * @param {string} bodyColor 
 * @param {string} textColor
 */
function setTheme(bodyColor, textColor) {
 
    document.body.style.backgroundColor = bodyColor;
    
    document.getElementById("QUICKQUILL").style.color = textColor;

    document.getElementById("buttonContainer").style.borderColor = textColor;

    document.getElementById("note").style.borderColor = textColor;

    document.getElementById("header").style.borderColor = textColor;

    document.getElementById("authors").style.color = textColor;
}


document.addEventListener("DOMContentLoaded", function () {
    var buttonContainer = document.getElementById("buttonContainer");

    var createButton = document.getElementById("createButton");

    if (buttonContainer && createButton) {
      createButton.addEventListener("click", function () {

        var buttonDiv = document.createElement("div");


        buttonDiv.className = "NoteContainer";

        var newButton = document.createElement("button");

        newButton.id = "Note" + (buttonContainer.children.length + 1);



        newButton.className = "NoteNumber";


        newButton.innerHTML = "Note " + ((buttonContainer.children.length + 1));

        newButton.onclick = function() {

          selectNote(this);

        };
        buttonDiv.appendChild(newButton);

        buttonContainer.appendChild(buttonDiv);


      });
    }
  });

  let selectedNote;

  function saveText() {
    const textarea = document.getElementById('myTextarea');
    if (selectedNote) {

      const buttonId = selectedNote.id;

      localStorage.setItem(`savedText_${buttonId}`, textarea.value);


      alert(`Text saved for ${buttonId}!`);



    } else {
      alert('Please select a Note before saving text.');
    }
  }

  function loadText() {
    const textarea = document.getElementById('myTextarea');

    if (selectedNote) {

      const buttonId = selectedNote.id;
      const savedText = localStorage.getItem(`savedText_${buttonId}`);

      if (savedText) {

        textarea.value = savedText;

        alert(`Text loaded for ${buttonId}!`);

      } else {

        alert(`No saved text found for ${buttonId}.`);


      }

    } else {

      alert('Please select a Note before loading text.');
    }
  }

  function selectNote(button) {
    if (selectedNote) {

      selectedNote.style.backgroundColor = ''; 


    }
    selectedNote = button;

    button.style.backgroundColor = 'yellow'; 
  }
