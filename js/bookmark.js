const bkm = document.querySelector(".bookmark__inner");
const localData = JSON.parse(localStorage.getItem("data"))

console.log(localData);

const localId = JSON.parse(localStorage.getItem("id"))



for(let i = 0; i<localId.length; i++){
    function getData() {
        fetch(`https://fakestoreapi.com/products/${localId[i]}`)
          .then((response) => response.json())
          .then((data) => {
            if(localId[i] == data.id){
                const li = document.createElement('li')
                const btn = document.createElement('button')
                const arr = localId
                btn.textContent = 'x'
                btn.id = data.id
                li.textContent= data.title

                btn.addEventListener("click", (e) => {
                    if(e.currentTarget.id == data.id){
                        li.style.display = 'none'

                        arr.map(item => {
                            if(e.currentTarget.id == item){
                                arr.pop(item)
                                console.log(arr);
                                localStorage.setItem("id", JSON.stringify(arr))
                            }
                        })
                    }
                })

                li.append(btn)
                bkm.append(li)
            }
          });
      }
      getData()
}
