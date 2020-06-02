export async function getWords(){
    let url = 'https://api.datamuse.com/words?topics=animals&max=2000';

    console.log("Getting data from: ", url);

    var words = [];
    await fetch(url)
        .then(response => response.json())
        .then(function (response){
            words = response.map(x => x.word) 
            })       
        .catch(error => console.error("Error: ", error))
    return words;
}

