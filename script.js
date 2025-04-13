function loadContent(filePath) {
    // Assuming the filePath will be like 'core/arrays/index' or 'advanced/multithreading/index'
    const file = `./${filePath}.md`; // You need the '.md' extension for markdown files

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found');
            }
            return response.text();
        })
        .then(data => {
            // Convert the markdown text to HTML using 'marked.js'
            const content = marked(data);
            document.getElementById('dynamic-content').innerHTML = content;
        })
        .catch(err => {
            document.getElementById('dynamic-content').innerHTML = `<p>Error loading content: ${err.message}</p>`;
            console.error("Error fetching file:", err);
        });
}
