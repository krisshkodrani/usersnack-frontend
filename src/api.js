import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:8000';

async function getFormatedResponse(requestPromise) {
    try {
        const response = await requestPromise;
        return { success: true, data: response.data }
    } catch (error) {
        return { success: false, data: null }
    }
}

export async function getPizzas() {
    return getFormatedResponse(axios.get(BASE_URL + '/pizza/'))
}


export async function getPizza(id) {
    return getFormatedResponse(axios.get(BASE_URL + `/pizza/${id}/`))
}

export async function getExtraIngredients() {
    return getFormatedResponse(axios.get(BASE_URL + '/pizza/ingredients/?is_extra=true'))
}

export async function postPizzaOrder({ customerName, customerAddress, pizzaId, extraIngredients }) {
    const postPizzaOrderRequestPromise = axios.post(BASE_URL + '/pizza/create-order/', {
        'customer_name': customerName,
        'customer_address': customerAddress,
        'pizza_id': pizzaId,
        'extra_ingredients': extraIngredients
    })
    return getFormatedResponse(postPizzaOrderRequestPromise)
}
