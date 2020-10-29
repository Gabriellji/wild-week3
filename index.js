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

let commentsToHtml;


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
    console.log(listOfComments);


    for(let i =0; i < listOfComments.length; i++) {
        commentsToHtml += `<br>
        <h4>${listOfComments[i].user}said:</h4>
        <p>${listOfComments[i].text}</p>
        <br>
        `
    }

    COMENTS_CONTAINER.innerHTML = commentsToHtml;
});

//////////////

for(let i =0; i < listOfComments.length; i++) {
    commentsToHtml += `<br>
    <h4>${listOfComments[i].user}said:</h4>
    <p>${listOfComments[i].text}</p>
    <br>
    `
}

COMENTS_CONTAINER.innerHTML = commentsToHtml;

///////////////

