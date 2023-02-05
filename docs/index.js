

const textMeButton = document.querySelector('.text-me-button');

textMeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const textMeArea = document.querySelector('.text-me-area');
    const text = textMeArea.value;
    if (text.trim().length < 10) {
        return setTextMeFeedback('Message is too short!', 'red');
    }

    sendTheText();
});

const sendTheText = () => {
    setTextMeFeedback('...', 'black');
    const textMeArea = document.querySelector('.text-me-area');
    const text = textMeArea.value;
    if (text.trim().length > 10) {
        fetch('https://personal-site-messages.ozanbakan.repl.co/text', {
            method: 'POST',
            body: text
        }).then(async response => {
            console.log(await response.text());
            if (response.status === 200) setTextMeFeedback('Your message is sent!', 'green');
            else {
                const error = new Error();
                error.response = response;
                throw error;
            }
        }).catch(e => {
            if (e.response) {
                setTextMeFeedback('Your message could not be sent.', 'red');
            } else {
                setTextMeFeedback('You can\'t send a message now, try again later.')
            }
        })
    }
}

let setTextMeErrorTimeout = null;

const setTextMeFeedback = (string, color) => {
    const element = document.querySelector('.send-me-error');
    element.innerText = string;
    element.style.display = 'block';
    element.style.color = color;
    clearTimeout(setTextMeErrorTimeout);
    setTextMeErrorTimeout = setTimeout(() => {
        element.style.display = 'none';
        element.innerText = '';
    }, 4000);
}