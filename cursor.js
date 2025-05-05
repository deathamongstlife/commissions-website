document.addEventListener('DOMContentLoaded', () => {
  // Create custom cursor
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);
  
  // Array to store trail elements
  let trails = [];
  
  // Maximum number of trail elements
  const maxTrails = 10;
  
  // Track if cursor is active
  let cursorActive = true;
  
  // Add glowing effect to headings
  document.querySelectorAll('h1, h2').forEach(heading => {
    heading.classList.add('glow');
  });
  
  // Cursor movement handler
  document.addEventListener('mousemove', (e) => {
    if (!cursorActive) return;
    
    // Update cursor position
    cursor.style.left = `${e.clientX - 10}px`;
    cursor.style.top = `${e.clientY - 10}px`;
    
    // Create trail element
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.clientX - 6}px`;
    trail.style.top = `${e.clientY - 6}px`;
    
    // Set random size for more dynamic effect
    const size = Math.random() * 4 + 8; // Between 8px and 12px
    trail.style.width = `${size}px`;
    trail.style.height = `${size}px`;
    
    document.body.appendChild(trail);
    trails.push(trail);
    
    // Remove oldest trail if we have too many
    if (trails.length > maxTrails) {
      trails[0].remove();
      trails.shift();
    }
    
    // Fade out and remove after delay
    setTimeout(() => {
      trail.style.opacity = '0';
      setTimeout(() => {
        trail.remove();
        trails = trails.filter(t => t !== trail);
      }, 200);
    }, 300);
  });
  
  // Hide cursor when leaving window
  document.addEventListener('mouseout', (e) => {
    if (e.relatedTarget === null) {
      cursor.style.opacity = '0';
      cursorActive = false;
    }
  });
  
  // Show cursor when entering window
  document.addEventListener('mouseover', () => {
    cursor.style.opacity = '1';
    cursorActive = true;
  });
  
  // Add hover effect to cards
  document.querySelectorAll('.card, .bot-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.mixBlendMode = 'screen';
    });
    
    card.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.mixBlendMode = 'normal';
    });
  });
  
  // Add hover effect to navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = 'conic-gradient(#bb00ff, #6e00ff, #bb00ff)';
    });
    
    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'conic-gradient(red, orange, yellow, green, blue, indigo, violet)';
    });
  });
});
