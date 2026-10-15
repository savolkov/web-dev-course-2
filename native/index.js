
const getRandomColor = () => {
    const color = ['red', 'blue', 'green'];

    return color[Math.floor(Math.random() * color.length)];
}

function onMaxButtonClick() {
    const maxButton = document.querySelector('#max-button');

    maxButton.style.color = getRandomColor();
}

const sq = (a) => a * a;