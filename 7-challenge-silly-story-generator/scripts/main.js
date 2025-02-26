const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random_number = Math.floor(Math.random() * array.length);
    return array[random_number];
}


//2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//3. EVENT LISTENER AND FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {

    newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14);
        const temperature =  Math.round((94 - 32) * 5 / 9);

        newStory = newStory.replace("300 pounds", `${weight} stones`);
        newStory = newStory.replace("94 fahrenheit", `${temperature} centigrade`);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}