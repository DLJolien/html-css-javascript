const ul = document.querySelector('ul');
const e = document.getElementById('nat').selectedValue;
const btn = document.getElementById("search");

function createList(){
    ul.innerHTML = "";
    let url = 'https://randomuser.me/api/?results=?nat=';
  
    console.log(e);
    url += e;

    fetch(url)
        .then((data) => data.json())
        .then(function (data){
            let persons = data.results;
            console.log(persons)
            persons.map(function(person){
                let li = document.createElement("li"),
                    img = document.createElement('img'),
                    span = document.createElement('span');
                    span2 = document.createElement('span');
                    img.src = person.picture.medium;
                    span.innerHTML = `${person.name.first} ${person.name.last}`;
                    span2.innerHTML = `${person.nat}`;
                    li.appendChild(img);
                    li.appendChild(span);
                    li.appendChild(span2);
                    ul.appendChild(li);

            })
        })          
}

btn.addEventListener("click", createList);

