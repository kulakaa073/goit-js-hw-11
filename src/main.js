//import fetchData from './js/pixabay-api';
//import renderData from './js/render-functions';

import axios from "axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
    key: '49331569-d75c2214014d7ff2c794993e6',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
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
                            <p>Likes: ${item.likes}</p>
                        </li>
                        <li>
                            <p>Views: ${item.views}</p>
                        </li>
                        <li>
                            <p>Comments: ${item.comments}</p>
                        </li>
                        <li>
                            <p>Downloads: ${item.downloads}</p>
                        </li>
                    </ul>
                </a>
            </li>`
        );
    });
    gallery.insertAdjacentHTML('afterbegin', galleryCollectionTemplate.join(''));
    //lightbox refresh
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
        alert('Please enter a search term');
        return;
    }
    loadingMessage.classList.remove('visually-hidden');
    searchRequest(searchData)
        .then((response) => {
            loadingMessage.classList.add('visually-hidden');
            console.log("response:");
            console.log(response);
            if (response.data.totalHits > 0) {
                renderData(response.data.hits);
            }
            else {
                alert('No images found');
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

const lightboxGallery = new SimpleLightbox('.gallery a', {...lightboxOptions});