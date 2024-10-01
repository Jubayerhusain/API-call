// console.log("connect succesful");
const loadPost  = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data)
}
loadPost();
