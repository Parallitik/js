const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        filtered: [],
        cartProducts: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false
    },
    methods: {
        filter(value){
            const regexp = new RegExp(value.currentTarget[0]._value, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            let find = this.cartProducts.find(el => el.id_product == product.id_product);
            if (find) {
                find.quantity++;
            } else {
                let itemCart = Object.assign(product, {quantity:1});
                this.cartProducts.push(itemCart);
            }
        },
        removeProduct(product){
            let findCart = this.cartProducts.find(el => el.id_product == product.id_product);
            if (findCart.quantity > 1) {
                findCart.quantity = findCart.quantity - 1;
            } else {
                this.cartProducts.splice(this.cartProducts.indexOf(product), 1)
            }
        }
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`${API + this.cartUrl}`)
        .then(data => {
            for(let el of data.contents){
                this.cartProducts.push(el);
            }
        }); 

        // Локально не подключается данный JSon файл через fetch

        // this.getJson(`getProducts.json`)
        //     .then(data => {
        //         for(let el of data){
        //             this.products.push(el);
        //         }
        //     })
    }
})