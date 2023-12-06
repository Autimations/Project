let themeNumber = 0;

const noteList = [];

function themePicker() {
    // Switch between themes based on the current theme number
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
 * Sets the theme for the application.
 *
 * @param {string} bodyColor - The background color for the body.
 * @param {string} textColor - The text color for various elements.
 */
function setTheme(bodyColor, textColor) {
    // Set the background color of the body
    document.body.style.backgroundColor = bodyColor;

    // Set text color for specific elements
    document.getElementById("QUICKQUILL").style.color = textColor;
    document.getElementById("buttonContainer").style.borderColor = textColor;
    document.getElementById("note").style.borderColor = textColor;
    document.getElementById("header").style.borderColor = textColor;
    document.getElementById("authors").style.color = textColor;
}

/**
 * Adds a note to the note list
 *
 * @param {string} name - The name of the note
 * @param {boolean} passwordProtected - whether the note is password protected or not
 */
function addNote(name, passwordProtected, theme) {
    // Check if a note with the given name already exists
    if (findNote(name)) {
        // If a note with the same name exists, display an alert and return
        alert("Note name already exists");
    } else {
        // If the note name doesn't exist, proceed to add the new note
        
        let password = '';

        // Check if the note is password protected
        if (passwordProtected) {
            // If password protected, prompt the user to enter a password
            password = prompt("Type in your password:");
        } else {
            // If not password protected, set password to null
            password = null;
        }

        // Create a new note object
        const newNote = {
            name: name,
            passwordProtected: passwordProtected,
            password: password,
            theme: theme,
            info: null,
        };

        // Add the new note to the noteList array
        noteList.push(newNote);
    }
}


/**
 * Adds a note to the note list
 *
 * @param {string} targetName - The name of the target note
 */
function deleteNote(targetName) {
    // Get the index of the given note
    index = findNote(targetName);

    // Check if the note is found (index is greater than 0)
    if (index > 0) {
        // Check if the note is password protected
        if (noteList[index].passwordProtected === true) {
            // Prompt the user for the note's password
            if (noteList[index].password === prompt("Enter the note's password to delete it:")) {
                // If the password is correct, remove the note from the noteList
                noteList.splice(index, 1);
                alert("Note removed");
            }
        }
    } else {
        // If the note is not found, display an alert
        alert("Note not found");
    }
}


function passwordProtection(){

}

/**
 * Looks through all the notes and see if one under the same name exists
 * 
 * @param {string} targetName 
 * @returns {number}
 */
function findNote(targetName) {
    // Iterate through the noteList array
    for (i = 0; i < noteList.length; i++) { 
        // Check if the current note's name matches the target name
        if (noteList[i].name === targetName) {
            // If a match is found, return the index of the note
            return i;
        } else {
            // If no match is found for the current note, return -1
            return -1;
        }
    }
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
          selectButton(this);
        };
        buttonDiv.appendChild(newButton);

        buttonContainer.appendChild(buttonDiv);
      });
    } else {
      console.error("Could not find buttonContainer or createButton");
    }
  });

  let selectedButton;

  function saveText() {
    const textarea = document.getElementById('myTextarea');
    if (selectedButton) {
      const buttonId = selectedButton.id;
      localStorage.setItem(`savedText_${buttonId}`, textarea.value);
      alert(`Text saved for button ${buttonId} successfully!`);
    } else {
      alert('Please select a button before saving text.');
    }
  }

  function loadText() {
    const textarea = document.getElementById('myTextarea');
    if (selectedButton) {
      const buttonId = selectedButton.id;
      const savedText = localStorage.getItem(`savedText_${buttonId}`);
      if (savedText) {
        textarea.value = savedText;
        alert(`Text loaded for button ${buttonId} successfully!`);
      } else {
        alert(`No saved text found for button ${buttonId}.`);
      }
    } else {
      alert('Please select a button before loading text.');
    }
  }

  function selectButton(button) {
    if (selectedButton) {
      selectedButton.style.backgroundColor = ''; 
    }
    selectedButton = button;
    button.style.backgroundColor = 'yellow'; 
  }
