let ul = document.getElementById("blogposts");

function getBlogposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {return res.json()})
    .then((data) => {
        data.forEach( (element) =>{
            let li = document.createElement("li");
            let h2 = document.createElement("h2");
            let p  = document.createElement("p");
            h2.innerHTML =  element.title
            p.innerHTML = element.body
            li.appendChild(h2);
            li.appendChild(p);
            ul.appendChild(li);

            console.log(li);
        }
            
        )})
}

getBlogposts();