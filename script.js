// Function to load the content from the given Markdown file and display it in the content area
function loadContent(path) {
    // Construct the file path
    const url = `${path}.md`;

    // Fetch the markdown file
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}`);
            }
            return response.text();
        })
        .then(markdownText => {
            // Convert Markdown to HTML using the Marked.js library
            const htmlContent = marked(markdownText);

            // Display the converted HTML in the content area
            document.getElementById("dynamic-content").innerHTML = htmlContent;
        })
        .catch(error => {
            // If an error occurs, display an error message in the content area
            document.getElementById("dynamic-content").innerHTML = `
                <p style="color: red;">Error loading content: ${error.message}</p>
            `;
        });
}
