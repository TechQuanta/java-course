function loadContent(filePath) {
  fetch(`${filePath}.md`)
    .then(res => {
      if (!res.ok) throw new Error("Content not found.");
      return res.text();
    })
    .then(md => {
      const html = marked.parse(md);
      document.getElementById("dynamic-content").innerHTML = html;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(err => {
      document.getElementById("dynamic-content").innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
}

// Dropdown
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

// Sidebar toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active');
});

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Auto-load README and set theme
window.addEventListener('DOMContentLoaded', () => {
  loadContent('README');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
async function loadContent(path) {
  // Construct the full path to the markdown file
  const markdownPath = path + 'index.md';

  try {
    const res = await fetch(markdownPath);
    const md = await res.text();
    const html = marked.parse(md);
    document.getElementById("dynamic-content").innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    document.getElementById("dynamic-content").innerHTML = `<p>Error loading content: ${err.message}</p>`;
  }
}
