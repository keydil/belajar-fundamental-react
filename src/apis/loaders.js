export const posts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => json);
};

export const postById = ({ params }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((response) => response.json())
        .then((json) => json);
};