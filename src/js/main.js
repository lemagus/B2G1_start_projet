var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
document.body.appendChild(css);

var img = document.createElement('img');
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png';
img.style.animation = 'spin 1s linear infinite';
document.body.appendChild(img);