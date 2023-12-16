function copyToClipboard() {


    // Select the text in the textarea
    inputBox.select();
    inputBox.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Deselect the textarea (optional)
    inputBox.setSelectionRange(0, 0);

  
}

