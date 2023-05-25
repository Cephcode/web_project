let button = document.getElementById("btn");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("pokeNumber");
let pokeName = document.getElementById("pokeName");
let badge = document.getElementById("badge");
let bg=document.getElementById("bg")
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 et 151
  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  let data = await fetch(requestString);
  let response = await data.json();
  image.src = response.sprites.front_default;
  pokeNumber.textContent = `#${response.id}`;
  pokeName.textContent = response.name;
  badge.textContent=response.name;
  let random_color=  Math.round(Math.random() * 50); // 1 et 151
  bg.style.backgroundColor= colorArray[random_color]
  console.log(response)
};

changePokemon();
button.addEventListener("click", changePokemon);
