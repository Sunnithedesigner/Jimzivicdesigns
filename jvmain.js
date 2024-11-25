document.addEventListener("DOMContentLoaded", function () {
    // Select the download button
    const downloadButton = document.getElementById("downloadTrigger");
  
    // Add a click event listener
    downloadButton.addEventListener("click", function () {
      // Create a new link element
      const link = document.createElement("a");
      
      // Set the GitHub URL of the file to download
      link.href = "https://yourusername.github.io/rug-builder-files/example-code.js"; // Update with your actual URL
  
      // Set the download attribute to specify the file name
      link.download = "rug-builder-code.js";
  
      // Trigger the download
      link.click();
    });
  });