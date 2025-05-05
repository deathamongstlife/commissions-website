const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

let trails = [];

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX - 10}px`;
  cursor.style.top = `${e.clientY - 10}px`;

  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = `${e.clientX - 6}px`;
  trail.style.top = `${e.clientY - 6}px`;
  document.body.appendChild(trail);
  trails.push(trail);

  setTimeout(() => {
    trail.remove();
    trails.shift();
  }, 500);
});
