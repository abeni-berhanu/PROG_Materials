document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    // Path to the JSON file
    const filesEndpoint = "files.json";

    fetch(filesEndpoint)
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                const fileName = file.split('/').pop();
                const fileLink = document.createElement("a");
                fileLink.href = `documents/${file}`;
                fileLink.target = "_blank";
                fileLink.className = "grid-item";
                fileLink.textContent = fileName;

                gridContainer.appendChild(fileLink);
            });
        })
        .catch(error => {
            console.error("Error fetching files:", error);
        });
});
