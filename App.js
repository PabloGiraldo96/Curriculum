
const myTimeout = setTimeout(displayFooter, 10000);

function displayFooter(){

let footer = document.getElementById('footer');
footer.style.display="block";
}

myTimeout;

function getRandomColor() {
	let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
         color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
}

function title() {
          document.getElementById("h1").style.color = getRandomColor();
		  document.getElementById("h1").style.transition = "all 0.5s ease";
          setTimeout(title, 2500);
      }

	title();
