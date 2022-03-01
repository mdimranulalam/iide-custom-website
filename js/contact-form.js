    const scriptURL = 'https://script.google.com/macros/s/AKfycbyqwD_J53kPwCkP36biRUYyMPBDD4j20qO0kOPHqu68GwXxOaQutmvwUguLrG6A1JjEZA/exec'

    const form = document.forms['google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
            .catch(error => console.error('Error!', error.message))
    })