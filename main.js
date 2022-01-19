let newFetch = fetch("https://api.github.com/users/SaraEkman/repos").then(res => res.json()).then((data) => {
    console.log(data, newFetch);
});