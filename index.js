let INPUT = document.querySelector('#user');
const BUTTON = document.querySelector('#button');
const TEXT = document.querySelector('#text');
let COMENTS_CONTAINER = document.querySelector('#comment');

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

COMENTS_CONTAINER.innerHTML = `<br>
<h4>User name said:</h4>
<p>Bfegwryt rwtywruwry tyye6u7 rtyrwyr</p>
<br>
<h4>User name said:</h4>
<p>hwryjrsyujsyrj etyjykjtdukjduy</p>
<br>
<h4>User name said:</h4>
<p>Bfegwry FGFGJKJ tyye6u7 rtyrwyr</p>`
