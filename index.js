import{a as p,S as d,i as l}from"./assets/vendor-Sa4a0LJu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();p.defaults.baseURL="https://pixabay.com/api/";const c={key:"49331569-d75c2214014d7ff2c794993e6",image_type:"photo",orientation:"horizontal",safesearch:!0};function g(s){return c.q=s,p.get("",{params:c})}function m(s){u.innerHTML="";const r=[];s.forEach(t=>{r.push(`<li>
                <a class="gallery-link" href="${t.largeImageURL}">
                    <img src="${t.previewURL}" alt="${t.tags}">
                    <ul>
                        <li>
                            <p>Likes: <span>${t.likes}</span></p>
                        </li>
                        <li>
                            <p>Views: <span>${t.views}</span></p>
                        </li>
                        <li>
                            <p>Comments: <span>${t.comments}</span></p>
                        </li>
                        <li>
                            <p>Downloads: <span>${t.downloads}</span></p>
                        </li>
                    </ul>
                </a>
            </li>`)}),u.insertAdjacentHTML("afterbegin",r.join("")),h.refresh()}document.querySelector(".form");let u=document.querySelector(".gallery");const f={captionsData:"alt",captionDelay:250},h=new d(".gallery a",{...f}),y=document.querySelector('input[name="search-text"]'),L=document.querySelector('button[type="submit"]');document.querySelector(".form");let i=document.querySelector(".loading");const b={theme:"dark",backgroundColor:"#EF4040",position:"topRight",messageColor:"#FAFAFB",message:"Please enter search terms",iconUrl:"./error-alert.svg",iconColor:"white",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B"},v={theme:"dark",backgroundColor:"#EF4040",position:"topRight",messageColor:"#FAFAFB",message:"No images found, try again",iconUrl:"./error-alert.svg",iconColor:"white",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B"};L.addEventListener("click",s=>{s.preventDefault();const r=y.value;if(r.trim()===""){l.show({...b});return}i.classList.remove("visually-hidden"),g(r).then(t=>{i.classList.add("visually-hidden"),t.data.totalHits>0?m(t.data.hits):l.show({...v})}).catch(t=>{i.classList.add("visually-hidden"),console.error("Error:",t)})});
//# sourceMappingURL=index.js.map
