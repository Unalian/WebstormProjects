const login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const xhr = new XMLHttpRequest();
    const url = 'https://mbp.cetacis.dev';
    xhr.open('POST', url + '/api/login', true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.withCredentials = true;
    xhr.send('user=' + username + '&pass=' + password);
    console.log(username);
    console.log(password);
    xhr.onreadystatechange = () => {
        const json = xhr.responseText;
        console.log(json);

    }
}

