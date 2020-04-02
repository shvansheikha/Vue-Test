Vue.component('message', {
    props:['title','body'],
    data(){
        return {
            isVisible:true
        }
    },
    template: `
    <article class="message" v-show="isVisible">
            <div class="message-header">
                <p> {{title}} </p>
                <button class="delete" aria-label="delete" @click="hideModel"></button>
            </div>
            <div class="message-body">
               {{body}}
            </div>
        </article>
    `,
    methods:{
        hideModel(){
                this.isVisible=false;
        }
    }
});


new Vue({
    el: '#root'
});