// script.js

let products = []
let orginalOrder = []

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    products = data.products.slice(0, 30)
    orginalOrder = data.products.slice(0, 30)

    display(products)
  })
  .catch(error => console.error("Błąd przy pobieraniu danych:", error));


  function display(products){
    const tbody = document.querySelector("#products tbody")
    tbody.innerHTML = ""

    products.forEach(product => {
      const tr = document.createElement("tr")

      const tdImg = document.createElement("td")
      const img = document.createElement("img")
      img.src = product.thumbnail
      tdImg.appendChild(img)
      tr.appendChild(tdImg)

      const tdTitle = document.createElement("td")
      tdTitle.textContent = product.title
      tr.appendChild(tdTitle)

      const tdDescription = document.createElement("td")
      tdDescription.textContent = product.description
      tr.appendChild(tdDescription)

      tbody.appendChild(tr)
    })
  }

  const searchInput = document.getElementById("search_input")

  searchInput.addEventListener("input", () =>{
    const pattern = String(searchInput.value).toLowerCase()
    if(pattern == "") {
      display(products)
      return
    }

    const filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(pattern)
    })

    display(filteredProducts)

  })


  const orderButton = document.getElementById("order")

  orderButton.addEventListener("change", () => {
    const selectedValue = orderButton.value

    if(selectedValue == 'asc'){
      products = products.sort((a, b) => a.title.localeCompare(b.title))
    }
    else if (selectedValue == 'desc'){
      products = products.sort((a, b) => b.title.localeCompare(a.title))
    }
    else{
      products = orginalOrder
    }
    display(products)
  })


