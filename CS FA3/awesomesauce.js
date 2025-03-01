function generateStory() 
{
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);

    let largest = Math.max(num1, num2, num3);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = alphabet[num1 - 1] || "?";
    let totalMins = num2 * num3;
    let hours = Math.floor(totalMins / 60);
    let mins = totalMins % 60;
    

    let story = "<br><br><br>You are at an alleyway. A murder just took place. The killer left three numbers: " + num1 + " ," + num2 + ", and " + num3 + ". <br><br>The largest number, " + largest + ", was the street address of his foretold second murder. <br><br>The second victim's name was said to start with the letter " + letter + ".<br><br>This second murder was rumoured to happen at around " + totalMins + " minutes (" + hours + " hours " + mins +  " minutes ) <br><br>So my question to you now is that, are you up for the challenge?" ;

    document.getElementById("story").innerHTML = story;
}
