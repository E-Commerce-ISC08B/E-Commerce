const API_URL = 'http://localhost:8080';
const getProducts = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/allproducts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
};
const getProductById = async (productId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/product/${productId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
};
const API = {
    getProducts,
    getProductById
}
export default API