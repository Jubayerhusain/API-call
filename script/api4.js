const loadPost = document.getElementById('loadData');
loadPost.addEventListener('click',
    // console.log('cunnected')
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    }
)