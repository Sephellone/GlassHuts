const initTabs=()=>{const e=document.querySelectorAll(".tabs");e&&e.length&&e.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),r=e.querySelectorAll('[role="tabpanel"]');if(r&&r.length&&t&&t.length){const a=a=>{r.forEach((e=>{e.hidden=!0})),t.forEach((e=>{e.setAttribute("aria-selected",!1),e.classList.remove("tabs__button--active")})),a.currentTarget.setAttribute("aria-selected",!0),a.currentTarget.classList.add("tabs__button--active");const c=a.currentTarget.id;e.querySelector(`[aria-labelledby="${c}"]`).hidden=!1};t.forEach((e=>e.addEventListener("click",a)))}}))};export{initTabs};