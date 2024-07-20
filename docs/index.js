document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    // Path to the JSON file
    const filesEndpoint = "files_list.json";

    fetch(filesEndpoint)
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                const fileNameWithExt = file.split('/').pop(); // Get the full file name
                const fileName = fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf('.')) || fileNameWithExt; // Remove the extension
                const fileType = fileNameWithExt.slice(-3); // This keeps the original file type extraction

                const icon = document.createElement("i");
                if (fileType === "pdf") {
                    icon.className = "fas fa-file-pdf icon";
                } else {
                    icon.className = "fas fa-file icon";
                }

                const name = document.createElement("h5");
                name.className = "file-name";
                name.textContent = fileName; // Set the file name without extension

                const card = document.createElement("div");
                card.className = "card";

                card.appendChild(icon);
                card.appendChild(name);

                card.addEventListener("click", function() {
                    window.location.href = `../materials/${file}`;
                });

                gridContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching files:", error);
        });
});
