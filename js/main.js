const boxCards = document.querySelector(".product__cards");
const btn = document.querySelector(".product__btn")
const product__list = document.querySelector(".product__list")
// category = ''
const ul = document.createElement('ul')
const All = document.querySelector(".product__list__all")

let category = []

All.addEventListener("click", (e) => {
    category = []
    category.push(``)
    getData()
})

try {
    function getData() {
        fetch(`https://fakestoreapi.com/products/${category.toString()}`)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    getData()


    fetch(`https://fakestoreapi.com/products/categories`)
        .then((response) => response.json())
        .then((data) => {
            data.map((item) => {
                const li = document.createElement('li')
                const btn = document.createElement('button')
                btn.textContent = item
                li.append(btn)

                btn.addEventListener('click', (e) => {
                    function get() {
                        category = []
                        category.push(`category/${e.target.textContent}`)
                    }

                    getData()
                    get()
                })

                product__list.append(li)
            })
        })
} catch (error) {

}