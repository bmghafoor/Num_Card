// $.get('http://numbersapi.com/1337/', function(data) {
//     $('#number').text(data);
// });



// function funfact(num) {
//     for(let i = 0; i < 4 ;i++){
//         let li = document.createElement("li");
//         axios.get(`http://numbersapi.com/${num}/`).then(resp => {
//             li.innerHTML = resp.data
//             console.log(li)
//             $('#array').append(li)
//         });

//     }
// }

// funfact('23')

// Part 2 async await

async function getFunFacts(num) {
    for(let i = 0; i < 4; i++){
        let li = document.createElement('li')
        res = await axios.get(`http://numbersapi.com/${num}/`)
        li.innerHTML = res.data
        console.log(li)
        $('#array').append(li)
    }
}


