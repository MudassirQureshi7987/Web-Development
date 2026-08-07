fetch("https://randomuser.me/api/?results=5")
    .then((rawdata) => {
        return rawdata.json();
    })
    .then((data) => {
        console.log(data.results);
    })
    .catch((error) => {
        console.log(error);
    })