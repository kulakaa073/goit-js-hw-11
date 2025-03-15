import{a as d,S as f}from"./assets/vendor-CrJmGTgy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();d.defaults.baseURL="https://pixabay.com/api/";const c={key:"49331569-d75c2214014d7ff2c794993e6",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(a){return c.q=a,d.get("",{params:c})}function g(a){s.innerHTML="";const o=[];a.forEach(e=>{o.push(`<li>
                <a class="gallery-link" href="${e.largeImageURL}">
                    <img src="${e.previewURL}" alt="${e.tags}">
                    <ul>
                        <li>
                            <p>Likes: ${e.likes}</p>
                        </li>
                        <li>
                            <p>Views: ${e.views}</p>
                        </li>
                        <li>
                            <p>Comments: ${e.comments}</p>
                        </li>
                        <li>
                            <p>Downloads: ${e.downloads}</p>
                        </li>
                    </ul>
                </a>
            </li>`)}),s.insertAdjacentHTML("afterbegin",o.join("")),L.refresh()}const m=document.querySelector('input[name="search-text"]'),y=document.querySelector('button[type="submit"]'),u=document.querySelector(".form");let s=document.querySelector(".gallery");s||(u.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>'),s=document.querySelector(".gallery"));let l=document.querySelector(".loading");l||(u.insertAdjacentHTML("afterend",'<p class="loading visually-hidden">Loading images, please wait...<span class="loader"></span></p>'),l=document.querySelector(".loading"));y.addEventListener("click",a=>{a.preventDefault();const o=m.value;if(console.log("searchdata: "+o),o.trim()===""){alert("Please enter a search term");return}l.classList.remove("visually-hidden"),p(o).then(e=>{l.classList.add("visually-hidden"),console.log("response:"),console.log(e),e.data.totalHits>0?g(e.data.hits):alert("No images found")}).catch(e=>{l.classList.add("visually-hidden"),console.error("Error:",e)})});const h={captionsData:"alt",captionDelay:250},L=new f(".gallery a",{...h});
//# sourceMappingURL=index.js.map
