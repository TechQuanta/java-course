// Function to load content dynamically
async function loadContent(path) {
  const markdownPath = path + 'index.md';

  try {
    const res = await fetch(markdownPath);
    const md = await res.text();
    const html = marked.parse(md); // Convert Markdown to HTML
    document.getElementById("dynamic-content").innerHTML = html;
    
    // Apply syntax highlighting
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
    
    // Generate Table of Contents
    generateTOC();

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


// Handle sidebar toggles for mobile via Logo
document.getElementById('logo-menu-toggle').addEventListener('click', () => {
  document.getElementById('left-sidebar').classList.toggle('active');
});

// Show category from Top Navbar
function showCategory(categoryId) {
  // Hide all submenus
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });
  
  // Show selected submenu
  const activeMenu = document.getElementById('cat-' + categoryId);
  if (activeMenu) {
    activeMenu.style.display = 'block';
  }

  // Update active state on top nav
  document.querySelectorAll('.top-link').forEach(link => {
    link.classList.remove('active-top');
    if (link.getAttribute('onclick') && link.getAttribute('onclick').includes("showCategory('" + categoryId + "')")) {
      link.classList.add('active-top');
    }
  });

  // Open sidebar on mobile when a category is selected
  if(window.innerWidth <= 900) {
    document.getElementById('left-sidebar').classList.add('active');
  }
}

// Generate dynamic Table of Contents
function generateTOC() {
  const content = document.getElementById('dynamic-content');
  const tocContainer = document.getElementById('toc-content');
  tocContainer.innerHTML = ''; // Clear previous

  const headings = content.querySelectorAll('h2, h3');
  
  if (headings.length === 0) {
    tocContainer.innerHTML = '<p style="color: gray; font-size: 13px;">No headings on this page.</p>';
    return;
  }

  headings.forEach((heading, index) => {
    // Ensure heading has an ID
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }

    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    link.className = 'toc-link ' + (heading.tagName.toLowerCase() === 'h2' ? 'toc-h2' : 'toc-h3');
    
    // Smooth scroll
    link.addEventListener('click', (e) => {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile sidebar on click
      if(window.innerWidth <= 900) {
        document.getElementById('left-sidebar').classList.remove('active');
      }
    });

    tocContainer.appendChild(link);
  });
}

// Add close behavior for all nav links on mobile
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 900) {
      document.getElementById('left-sidebar').classList.remove('active');
    }
    // Highlight active link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
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

  // Generate static TOC for the welcome page
  generateTOC();

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
