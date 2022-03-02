    const scriptURL = 'https://script.google.com/macros/s/AKfycbyqwD_J53kPwCkP36biRUYyMPBDD4j20qO0kOPHqu68GwXxOaQutmvwUguLrG6A1JjEZA/exec'

    const form = document.forms['google-sheet']
    const form2 = document.forms['google-sheet-2']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    })
    
    form2.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form2) })
    })


    $(document).ready(function() {
        $("#myform").submit(function(e) {
            $("#first").hide();
            $("#second").show();
        });
    });

    

