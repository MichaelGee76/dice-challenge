function randomNumber() {
    let ranNum = Math.floor(Math.random() * 6) + 1;
    
    return ranNum;
};


function rollDicee() {
    let ranInt = randomNumber();
    let ranIntTwo = randomNumber();
    let currentImage = "dice" + ranInt + ".png";
    let imagePath = "./images/" + currentImage; 
        
    document.querySelector(".img1").setAttribute("src", imagePath);
    
    currentImage = "dice" + ranIntTwo + ".png";
    imagePath = "./images/" + currentImage;

    document.querySelector(".img2").setAttribute("src", imagePath);   
    
    if (ranInt > ranIntTwo) {
        document.querySelector("h1").textContent = "Player 1 is the Winner!";
    } else if (ranInt < ranIntTwo) {
        document.querySelector("h1").textContent = "Player 2 is the Winner!";
    } else {
        document.querySelector("h1").textContent = "It's a draw!";
    }
    
    
        
 
}


