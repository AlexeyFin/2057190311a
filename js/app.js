// Dom elements
const comment_form = document.forms['comment_form'];
const comment_name_input = comment_form.elements['name'];
const comment_text_input = comment_form.elements['text'];
const comment_count_value = document.querySelector('.comment_count_value');


// Modules

const comments_data = comments_data_module.getInstance();
const comments_ui = comments_ui_module;

// Variables

let isConnemtFormActive = false;

//Features

const comment_form_submit = function () {
    if (isConnemtFormActive) {
        let comment = {
            text: comment_text_input.value,
            name: comment_name_input.value,
            date: new Date()
        };

        comments_data.addComment(comment);
        comments_ui.addComment(comment);
        comment_form.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
        comment_count_plus();
        comment_form.reset();
        comment_form.blur();
    }

};
const comment_count_plus = function () {
   let value = +comment_count_value.innerText;
   value++;
   comment_count_value.innerHTML = `${value}`;
}
// Events

comment_form.addEventListener('submit', e => {
    e.preventDefault();
    comment_form_submit();

});

comment_form.addEventListener('keypress', event => {
    if ((event.ctrlKey) && ((event.keyCode === 0xA) || (event.keyCode === 0xD))) {
        comment_form_submit();
    }

});

comment_form.addEventListener('input', e => {
    if (comment_text_input.value && comment_name_input.value) {
        comment_form.querySelector('button[type="submit"]').removeAttribute('disabled');
        isConnemtFormActive = true;
    } else {
        comment_form.querySelector('button[type="submit"]').setAttribute('disabled', 'disabled');
        isConnemtFormActive = false;

    }
});