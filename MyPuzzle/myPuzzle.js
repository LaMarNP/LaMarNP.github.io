document.addEventListener("DOMContentLoaded", () => {

    const title = document.createElement('h1');
    document.body.appendChild(title);
    document.getElementsByTagName("h1")[0].innerHTML = "The DOM Puzzle";
    document.body.prepend(title);

    const puzzleContainer = document.querySelector("#puzzle");
        puzzleContainer.style.position = "relative";
        puzzleContainer.style.width = "500px";
        puzzleContainer.style.height = "500px";
        puzzleContainer.style.backgroundColor = "#7338A0";

      puzzleContainer.addEventListener("mouseenter", () => {
        puzzleContainer.style.border = "6px solid #FF5733";
        });

    puzzleContainer.addEventListener("mouseleave", () =>{
        puzzleContainer.style.border = "5px solid black";
    });


    buttonA = createLargeButtons("#9455F4", "125px", "125px");
    buttonB = createLargeButtons("#4A2B74", "125px", "125px");
    buttonC = createLargeButtons("#594492", "125px", "125px");
    buttonD = createLargeButtons("#854DDC", "125px", "125px");

    buttonA.innerText = "A";
    buttonA.style.top = "0";
    buttonA.style.left = "0";

    buttonB.innerText = "B";
    buttonB.style.top = "0";
    buttonB.style.left = "125px";

    buttonC.innerText = "C";
    buttonC.style.top = "125px";
    buttonC.style.left = "0";

    buttonD.innerText = "D";
    buttonD.style.top = "125px";
    buttonD.style.left = "125px";

    puzzleContainer.appendChild(buttonA);
    puzzleContainer.appendChild(buttonB);
    puzzleContainer.appendChild(buttonC);
    puzzleContainer.appendChild(buttonD);

    const smallButtonsGrid = document.createElement('div');
        smallButtonsGrid.style.top = "250px";
        smallButtonsGrid.style.left = "250px";
        smallButtonsGrid.style.display = "grid";
        smallButtonsGrid.style.gridTemplateColumns = "repeat(10, 24px)";
        smallButtonsGrid.style.gridTemplateRows = "repeat(10, 24px)";
        smallButtonsGrid.style.gap = "1px";
        smallButtonsGrid.style.position = "absolute";
    puzzleContainer.appendChild(smallButtonsGrid);

    createSmallButtons(smallButtonsGrid, 100);

    smallButtonsGrid.querySelectorAll('button').forEach((button) => {
        button.addEventListener("click", () => {
            button.style.backgroundColor = '#4A2574';

            if(button.previousElementSibling) {
                button.previousElementSibling.style.backgroundColor = "#FF9E00";
            }

            if (button.nextElementSibling) {
                button.nextElementSibling.style.backgroundColor = "#FF9E00";
            }
        });
    });

    const finePrint = document.createElement("p");
    document.body.appendChild(finePrint)
    finePrint.innerHTML = "This is a puzzle created entirely with JavaScript"
});


function createLargeButtons(color, width, height){
    const button = document.createElement('button')
    button.style.backgroundColor = color;
    button.style.width = width;
    button.style.height = height;
    button.style.position = "absolute";
    button.style.textAlign = "center";
    return button;
}

function createSmallButtons(area, count){
    for (let i = 0; i < count; i++){
        const smallButton = document.createElement('button');
        smallButton.style.width = "25px";
        smallButton.style.height = "24px";
        smallButton.style.backgroundColor = "#C59CFE";
        area.appendChild(smallButton);
    }
}

