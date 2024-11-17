let container = document.querySelector("#container");


const domData = (data) => {
    data.map((todo) => {
        container.innerHTML += `
        <ul class="bg-gray-400 text-white py-2 rounded-lg w-80 h-28">
        <li class="hover:bg-gray-600 px-2 cursor-pointer">id: ${todo.id}</li>
         <li class="hover:bg-gray-600 px-2 cursor-pointer">title: ${todo.title}</li>
          <li class="hover:bg-gray-600 px-2 cursor-pointer">completed: ${todo.completed}</li>
        </ul>
    `
    })

}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => domData(data)) // Handle parsed data
    .catch(error => console.error('There was a problem:', error));