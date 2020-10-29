let INPUT = document.querySelector('#user');
const BUTTON = document.querySelector('#button');
const TEXT = document.querySelector('#text');

let listOfComments = [
    {
        user: 'Marc',
        text: 'really long comment'
    },
    {
        user: 'Lucke',
        text: 'Llalala'
    }
];

BUTTON.addEventListener('click', () => {
    let inputValue = INPUT.value;
    let textValue = TEXT.value;

    listOfComments.push(
        {
        user: inputValue,
        text: textValue,
        }
    );
    console.log(listOfComments);
    INPUT.value = '';
    TEXT.value = '';
})