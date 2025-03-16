import{a as u,S as p,i as c}from"./assets/vendor-Sa4a0LJu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();u.defaults.baseURL="https://pixabay.com/api/";const d={key:"49331569-d75c2214014d7ff2c794993e6",image_type:"photo",orientation:"horizontal",safesearch:!0};function g(s){return d.q=s,u.get("",{params:d})}function m(s){i.innerHTML="";const o=[];s.forEach(t=>{o.push(`<li>
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
            </li>`)}),i.insertAdjacentHTML("afterbegin",o.join("")),y.refresh()}const f=document.querySelector(".form");let i=document.querySelector(".gallery");i||(f.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>'),i=document.querySelector(".gallery"));const h={captionsData:"alt",captionDelay:250},y=new p(".gallery a",{...h}),L=document.querySelector('input[name="search-text"]'),S=document.querySelector('button[type="submit"]'),v=document.querySelector(".form");let a=document.querySelector(".loading");a||(v.insertAdjacentHTML("afterend",'<p class="loading visually-hidden">Loading images, please wait...<span class="loader"></span></p>'),a=document.querySelector(".loading"));const b={theme:"dark",backgroundColor:"#EF4040",position:"topRight",messageColor:"#FAFAFB",message:"Please enter search terms",iconUrl:"/img/error-alert.svg",iconColor:"white",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B"},w={theme:"dark",backgroundColor:"#EF4040",position:"topRight",messageColor:"#FAFAFB",message:"No images found, try again",iconUrl:"/img/error-alert.svg",iconColor:"white",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B"};S.addEventListener("click",s=>{s.preventDefault();const o=L.value;if(o.trim()===""){c.show({...b});return}a.classList.remove("visually-hidden"),g(o).then(t=>{a.classList.add("visually-hidden"),t.data.totalHits>0?m(t.data.hits):c.show({...w})}).catch(t=>{a.classList.add("visually-hidden"),console.error("Error:",t)})});
//# sourceMappingURL=index.js.map
