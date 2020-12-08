const check = () => {
    const xhr = new XMLHttpRequest();
    const url = 'http://127.0.0.1:8080';
    xhr.open('GET', url + '/api/check', true);
    xhr.onreadystatechange = () => {
        const json = xhr.responseText;
        console.log(json);
    }
}

