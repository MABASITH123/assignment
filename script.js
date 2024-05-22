const num1 = document.querySelector('#text-field1');
const num2 = document.querySelector('#text-field2');

let animating = false;

function calculate(operator) {

    const result = eval(num1.value + operator + num2.value);

    document.querySelector('.output-display').innerHTML = result;

    if(!animating) slideAnimation();

}

function slideAnimation() {

    animating = true;

    const outputContainer = document.querySelector('.output-container');
    outputContainer.classList.add('slide-up-animation');

    setTimeout(() => {
        outputContainer.style.transform = `translateY(-95%)`;

        setTimeout(() => {
            outputContainer.classList.remove('slide-up-animation');
            outputContainer.classList.add('slide-down-animation');

            setTimeout(() => {
                outputContainer.classList.remove('slide-down-animation');
                outputContainer.style.transform = `translateY(0%)`;

                animating = false
            }, 290);

        }, 4000);

    }, 290);

}