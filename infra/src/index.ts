
const getRandomColor = (): string => {
    const color = ['red', 'blue', 'green'];

    return color[Math.floor(Math.random() * color.length)]!;
}

function onMaxButtonClick() {
    const maxButton = document.querySelector('#max-button') as HTMLElement;

    maxButton.style.color = getRandomColor();
}

const sq: (a: number) => number = (a) => a * a;