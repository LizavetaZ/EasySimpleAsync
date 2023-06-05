let create = document.querySelector('.create')
const url = "https://jsonplaceholder.typicode.com/todos/1";
let make = document.querySelector('.make');
let delet = document.querySelector('.delete');

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const data = await getData(url)
try {
	const data = await getData(url)
	console.log(data)
} catch (error) { 
	console.log(error.message)
}

create.addEventListener('click', (e) => {
    e.preventDefault()
    let box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <div class="title">
            <p>${data.title}</p>
        </div>
        <div class="divider-up">
            <hr>
        </div>
        <div class="compl">${data.completed}</div>
        <div class="divider-low">
            <hr>
        </div>
        <div class="wrapper">
        <div class="author">${data.userId, data.id}</div>
        </div> 
    `
    make.append(box);
})

delet.addEventListener('click', () => {
    make.parentNode.removeChild(box);
})