Vue.component('modal', {

    template: `
    <div class="modal is_active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
        </div>
    `,

});


new Vue({
    el: '#root',
    data: {
        showModal: false;
    }
});