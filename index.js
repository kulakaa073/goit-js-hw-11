import{a as u,i as c,S as g}from"./assets/vendor-Sa4a0LJu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";const d={key:"49331569-d75c2214014d7ff2c794993e6",image_type:"photo",orientation:"horizontal",safesearch:!0},m={theme:"dark",backgroundColor:"#EF4040",position:"topRight",messageColor:"#FAFAFB",message:"Please enter search terms",iconUrl:"/img/error-alert.svg",iconColor:"white",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B"},f={theme:"dark",backgroundColor:"#EF4040",position:"topRight",messageColor:"#FAFAFB",message:"No images found, try again",iconUrl:"/img/error-alert.svg",iconColor:"white",messageSize:"16px",messageLineHeight:"24px",progressBarColor:"#B51B1B"};function h(s){return d.q=s,u.get("",{params:d})}function y(s){i.innerHTML="";const r=[];s.forEach(t=>{r.push(`<li>
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
            </li>`)}),i.insertAdjacentHTML("afterbegin",r.join("")),b.refresh()}const L=document.querySelector('input[name="search-text"]'),v=document.querySelector('button[type="submit"]'),p=document.querySelector(".form");let i=document.querySelector(".gallery");i||(p.insertAdjacentHTML("afterend",'<ul class="gallery"></ul>'),i=document.querySelector(".gallery"));let a=document.querySelector(".loading");a||(p.insertAdjacentHTML("afterend",'<p class="loading visually-hidden">Loading images, please wait...<span class="loader"></span></p>'),a=document.querySelector(".loading"));v.addEventListener("click",s=>{s.preventDefault();const r=L.value;if(console.log("searchdata: "+r),r.trim()===""){c.show({...m});return}a.classList.remove("visually-hidden"),h(r).then(t=>{a.classList.add("visually-hidden"),t.data.totalHits>0?y(t.data.hits):c.show({...f})}).catch(t=>{a.classList.add("visually-hidden"),console.error("Error:",t)})});const S={captionsData:"alt",captionDelay:250},b=new g(".gallery a",{...S});
//# sourceMappingURL=index.js.map
