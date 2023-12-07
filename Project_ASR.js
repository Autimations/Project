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
