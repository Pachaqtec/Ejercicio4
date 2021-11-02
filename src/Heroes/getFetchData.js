export default function getFetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(new Error('Algo salio mal'));
            });
    });
}