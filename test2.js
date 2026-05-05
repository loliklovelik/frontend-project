async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка: Неверный статус ответа (${response.status})`);
        }
        const data = await response.text();
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}


fetchData('https://www.kostyor.ru/poetry/gukovsky/?n=9')
//fetchData('https://api.example.com/data')
    .then(data => {
        console.log('Данные из запроса:', data);
    })
    .catch(error => {
        console.error('Ошибка запроса:', error);
    });


    
