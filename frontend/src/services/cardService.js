import http from './httpService';
import { apiUrl } from '../config/config.json';
import Swal from 'sweetalert2';

export function getAllCards() {
    return http.get(`${apiUrl}/cards/discover`);
}

export function getCard(cardId) {
    return http.get(`${apiUrl}/cards/${cardId}`);
}

export function editCard(card) {
    const cardId = card._id;
    delete card._id;
    return http.put(`${apiUrl}/cards/${cardId}`, card)
}

export function getMyCards() {
    return http.get(`${apiUrl}/cards/my-bands`)
}

export function addToFavorites(userId, cardId) {

    return http.put(`${apiUrl}/cards/favorites/${userId}/${cardId}`)
}

export function showFavorites(userId) {

    return http.get(`${apiUrl}/cards/favorites/${userId}`)
}

export function removeFromFavorites(userId, cardId) {

    return http.delete(`${apiUrl}/cards/favorites/${userId}/${cardId}`)
}

export function createCard(card) {
    return http.post(`${apiUrl}/cards`, card);
}

//pop up that shows up when user clicks on delete card.
export function deleteCard(cardId) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            http.delete(`${apiUrl}/cards/${cardId}`)
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            setTimeout(window.location = '/my-bands', 8000);//think of a better way 
        }
    })
}

const ex = {
    createCard,
    getMyCards,
    getCard,
    editCard,
    deleteCard,
    getAllCards,
    addToFavorites,
    showFavorites,
    removeFromFavorites
}

export default ex;