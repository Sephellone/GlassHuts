const detectCheckedCheckboxes=(t,e)=>{t.forEach((t=>{const o=e.querySelector(`[data-option=${t.name}]`);t.checked?o.classList.remove("total__element--hidden"):o.classList.add("total__element--hidden")}))},onCheckboxChange=(t,e)=>{const o=t.target.name,l=e.querySelector(`[data-option=${o}]`);t.target.checked?l.classList.remove("total__element--hidden"):l.classList.add("total__element--hidden")},updateTotal=(t,e)=>{let o=0,l=0;const n=t.querySelectorAll(".total__element:not(.total__element--hidden):not(.total__element--discount)"),a=t.querySelector(".total__element--discount");if(a.classList.contains("total__element--hidden"))n.forEach((t=>{const e=+t.querySelector(".total__sum-number").textContent;o+=e})),e.textContent=o;else{n.forEach((t=>{const e=+t.querySelector(".total__sum-number").textContent;o+=e})),l=Math.ceil(.1*-o);a.querySelector("#discount").textContent=l,e.textContent=o+l}},checkboxes=document.querySelectorAll(".checkbox-control__input"),totalList=document.querySelector(".total__details"),totalSum=document.querySelector("#final-amount"),initServicesCheckboxes=()=>{var t;checkboxes&&checkboxes.length&&totalList&&totalSum&&(t=totalList,checkboxes.forEach((e=>{const o=t.querySelector(`[data-option=${e.name}]`);e.checked?o.classList.remove("total__element--hidden"):o.classList.add("total__element--hidden")})),updateTotal(totalList,totalSum),checkboxes.forEach((t=>{t.addEventListener("change",(t=>{onCheckboxChange(t,totalList),updateTotal(totalList,totalSum)}))})))},COUPONS=["MINUS10","DISCOUNT","QWERTY","TEST","LOL"],checkDiscountElementStatus=(t,e,o)=>{t.classList.contains("total__element--hidden")?(e.disabled=!1,o.disabled=!1):(e.disabled=!0,o.disabled=!0)},initCouponsButton=()=>{const t=document.querySelector(".total__coupon-button"),e=document.querySelector("#coupon"),o=document.querySelector(".total__element--discount");if(t&&e&&o&&totalList&&totalSum){const l=()=>{var l,n;COUPONS.includes(e.value)?(o.classList.remove("total__element--hidden"),e.value="",updateTotal(totalList,totalSum)):(e.value="nope",setTimeout((()=>{e.value=""}),1e3)),l=t,n=e,o.classList.contains("total__element--hidden")?(l.disabled=!1,n.disabled=!1):(l.disabled=!0,n.disabled=!0)};t.addEventListener("click",l)}};export{initServicesCheckboxes,updateTotal,initCouponsButton};