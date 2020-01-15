const prod = {
    url: {
        API_URL: 'https://pacific-lake-05698.herokuapp.com/'
    }
}

const dev = {
    url: {
        API_URL: 'http://localhost:3000/api/v1/fruits'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;