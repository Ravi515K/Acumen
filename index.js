
const ID = 'pcWSOlWA5LhSQD7u9NK8RHctqgSrX1TVnn2Zpf8-utQ'
let val = null
console.log(val)
const handleChange = () => {
    val = document.querySelector("#input").value
}


const getImages = () => {


    fetch(`https://api.unsplash.com/search/photos/?client_id=${ID}&query=${val}`)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res)
            AppendData(res.results)

        })
    let newVal = document.querySelector("#input")
    newVal.innerHTML = ""
}



const handleSearch = () => {
    let x = document.querySelector("#search").value;
    fetch(`https://api.unsplash.com/search/photos/?client_id=${ID}&query=${x}`)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res)
            AppendData(res.results)

        })

}

const AppendData = (data) => {
    console.log(data)
    let main = document.querySelector('#grid')
    main.innerHTML = "";
    data.map((el) => {
       
        let card = document.createElement('div');
        card.className = "card"
       
        let img = document.createElement('Img');
        img.src = el.urls.small

        let name = document.createElement('h3');
        name.innerHTML = el.user.name;

        let description = document.createElement('p');
        description.innerHTML = el.description;

        let link = document.createElement('a')
        link.href = el.links.download
        link.innerHTML = "Original Picture Link"
        
        card.append(img, name, description, link)
        main.append(card)
    })
}