export const apiUrl = 'http://backend.test/api/';
export const baseUrl = 'http://backend.test';

export const token = () => {
    const userInfo = localStorage.getItem('userInfo');
    const data = JSON.parse(userInfo);
    return data.token;
};
