// console.log("Connect seccesful");

const loadPost2 = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => postSection(data));
}
function postSection(post) {
    for(const data of post){
        console.log(data)
        // console.log(data.title)
    }
}