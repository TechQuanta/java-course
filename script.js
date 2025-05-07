// Function to load content dynamically
async function loadContent(path) {
  const markdownPath = path + 'index.md';

  try {
    const res = await fetch(markdownPath);
    const md = await res.text();
    const html = marked.parse(md); // Convert Markdown to HTML
    document.getElementById("dynamic-content").innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    document.getElementById("dynamic-content").innerHTML =
      `<p style="color: red;">Updates are on the way for this course.</p>`;
  }
}

// Static welcome content
const defaultStaticHTML = `
  <div class="welcome-block animate-fade-in-up">
    <img src="Java.svg" alt="Java Logo" class="java-logo animate-logo-pop" />
    <h2>Let's Get Started with Java</h2>
    <p>Explore the structured Java path starting from Core to Senior level topics:</p>
    <br/>
    <ul class="starter-list">
      <li>🔰 Core Java: Variables, Control Flow, OOP Basics</li>
      <li>⚙️ Advanced Java: Threads, Collections, File I/O</li>
      <li>👨‍💻 Senior Level: JVM, Microservices, Performance</li>
    </ul><br/>
    <p class="start-note">Use the sidebar to begin your journey. Happy learning! ☕</p>
  </div>
`;


// Handle dropdown toggle
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.nextElementSibling;
    const isOpen = container.style.display === 'block';

    container.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen
      ? btn.textContent.replace('▾', '▸')
      : btn.textContent.replace('▸', '▾');
  });
});

// Handle sidebar toggle for mobile
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Handle theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
});

// On page load: static first, then markdown + theme
window.addEventListener('DOMContentLoaded', () => {
  // Load static HTML first
  document.getElementById('dynamic-content').innerHTML = defaultStaticHTML;

  // Optional: Load README if available (comment this if you want to keep only static)
  // loadContent('README');

  // Apply saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
// Select all dropdown buttons
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Add click event to toggle dropdown visibility
dropdownBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdownContainer = btn.nextElementSibling;

    // Toggle the 'open' class to show or hide the dropdown
    dropdownContainer.classList.toggle('open');
  });
});
const links = document.querySelectorAll('.dropdown-container a');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active')); // remove from all
    link.classList.add('active'); // set to clicked one
  });
});
