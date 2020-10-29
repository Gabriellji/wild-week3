let INPUT = document.querySelector('#user');
const BUTTON = document.querySelector('#button');
const TEXT = document.querySelector('#text');
const COMENTS_CONTAINER = document.querySelector('#comment');

let listOfComments = [
    {
        user: 'Marc',
        text: 'really long comment'
    },
    {
        user: 'Luck',
        text: 'Llalala'
    }
];

const cleanInputs = (input, text) => {
    input.value = '';
    text.value = '';
}

function createAListOfCommentsFromArray(array) {
    let arrayToHtml = ''
    for (let i = 0; i < array.length; i++) {
      arrayToHtml += `
      <br>
      <h4>${array[i].user} said:</h4>
      <p>${array[i].text}</p>
      <br>
      <hr>
    `
    }
    return arrayToHtml;
  }


BUTTON.addEventListener('click', () => {
    let inputValue = INPUT.value;
    let textValue = TEXT.value;
    commentsToHtml = '';

    listOfComments.push(
        {
        user: inputValue,
        text: textValue,
        }
    );
    cleanInputs(INPUT, TEXT);

    COMENTS_CONTAINER.innerHTML = createAListOfCommentsFromArray(listOfComments);
});

COMENTS_CONTAINER.innerHTML = createAListOfCommentsFromArray(listOfComments);
