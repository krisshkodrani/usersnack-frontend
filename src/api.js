import axios from 'axios';
import 'dotenv/config';

const BASE_URL = process.env.BACKEND_BASE_URL ? process.env.BACKEND_BASE_URL : 'http://localhost:8000';

export async function getPizzas() {
    try {
        const response = await axios.get(BASE_URL + '/pizza/');
        return response.data
    } catch (error) {
        console.error(error);
    }
}


export async function getPizza(id) {
    try {
        const response = await axios.get(BASE_URL + '/pizza/' + id);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function getExtraIngredients() {
    try {
        const response = await axios.get(BASE_URL + '/pizza/ingredients/?is_extra=true');
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export async function postPizzaOrder({ customerName, customerAddress, pizzaId, extraIngredients }) {
    try {
        const response = await axios.post(BASE_URL + '/pizza/create-order/', {
            'customer_name': customerName,
            'customer_address': customerAddress,
            'pizza_id': pizzaId,
            'extra_ingredients': extraIngredients
        });
        return response.data
    } catch (error) {
        console.error(error);
    }
}
