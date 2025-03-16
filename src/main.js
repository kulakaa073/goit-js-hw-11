//import fetchData from './js/pixabay-api';
//import renderData from './js/render-functions';

import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
    key: '49331569-d75c2214014d7ff2c794993e6',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
}

const iziToastNoInputSettings = {
    theme: 'dark',
    backgroundColor: '#EF4040',
    position: 'topRight',
    messageColor: '#FAFAFB',
    message: 'Please enter search terms',
    icon: './img/error-alert.svg',
    iconColor: 'white',
    messageSize: '16px',
    messageLineHeight: '24px',
    progressBarColor: '#B51B1B'
}

const iziToastNoImageSettings = {
    theme: 'dark',
    backgroundColor: '#EF4040',
    position: 'topRight',
    messageColor: '#FAFAFB',
    message: 'No images found, try again',
    icon: './img/error-alert.svg',
    iconColor: 'white',
    messageSize: '16px',
    messageLineHeight: '24px',
    progressBarColor: '#B51B1B'
}

function searchRequest(searchData) {
    params.q = searchData;
    return axios.get('', { params });
}

function renderData(data) {
    gallery.innerHTML = '';
    const galleryCollectionTemplate = [];
    data.forEach(item => {
        galleryCollectionTemplate.push(
            `<li>
                <a class="gallery-link" href="${item.largeImageURL}">
                    <img src="${item.previewURL}" alt="${item.tags}">
                    <ul>
                        <li>
                            <p>Likes: <span>${item.likes}</span></p>
                        </li>
                        <li>
                            <p>Views: <span>${item.views}</span></p>
                        </li>
                        <li>
                            <p>Comments: <span>${item.comments}</span></p>
                        </li>
                        <li>
                            <p>Downloads: <span>${item.downloads}</span></p>
                        </li>
                    </ul>
                </a>
            </li>`
        );
    });
    gallery.insertAdjacentHTML('afterbegin', galleryCollectionTemplate.join(''));
    lightboxGallery.refresh();
}

const searchInput = document.querySelector('input[name="search-text"]');
const searchButton = document.querySelector('button[type="submit"]');
const searchForm = document.querySelector('.form');
let gallery = document.querySelector('.gallery');
if (!gallery) {
    searchForm.insertAdjacentHTML('afterend', '<ul class="gallery"></ul>');
    gallery = document.querySelector('.gallery');
}
let loadingMessage = document.querySelector('.loading');
if (!loadingMessage) {
    searchForm.insertAdjacentHTML('afterend', '<p class="loading visually-hidden">Loading images, please wait...<span class="loader"></span></p>');
    loadingMessage = document.querySelector('.loading');
}

//const galleryElementTemplate = '<ul class="gallery"></ul>';

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchData = searchInput.value;
    console.log("searchdata: " + searchData);
    if (searchData.trim() === '') {
        iziToast.show({ ...iziToastNoInputSettings });
        return;
    }
    loadingMessage.classList.remove('visually-hidden');
    searchRequest(searchData)
        .then((response) => {
            loadingMessage.classList.add('visually-hidden');
            if (response.data.totalHits > 0) {
                renderData(response.data.hits);
            }
            else {
                iziToast.show({ iziToastNoImageSettings });
            }
        })
        .catch((error) => {
            loadingMessage.classList.add('visually-hidden');
            console.error('Error:', error);
        });
});

const lightboxOptions = {
    captionsData: 'alt',
    captionDelay: 250
}

const lightboxGallery = new SimpleLightbox('.gallery a', { ...lightboxOptions });