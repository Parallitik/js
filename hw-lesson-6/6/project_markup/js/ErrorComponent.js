Vue.component('error', {
    data () {
        return {
            img: 'https://images.pexels.com/photos/6898855/pexels-photo-6898855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    },
    template:`
            <div class="error" v-if="$parent.error">
                <p>I'am so sorry, a can't find some data</p>  
                <img class="error-img" :src="img" alt="sad smiley">
            </div>
            `
})