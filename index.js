const firstDropdown=document.querySelector('.first');
const secondDropdown=document.querySelector('.second');
const firstArrow=document.querySelector('.arrow1');
const secondArrow=document.querySelector('.arrow2');
const menu=document.querySelector('.menu');
const modal=document.querySelector('.modal');
const close=document.querySelector('.close');
const firstDropdownMobile=document.querySelector('.mobile-first');
const secondDropdownMobile=document.querySelector('.mobile-second');
const firstArrowMobile=document.querySelector('.arrow1-mobile');
const secondArrowMobile=document.querySelector('.arrow2-mobile');


close.addEventListener('click',()=>{
    modal.setAttribute('hidden','false');
    menu.removeAttribute('hidden');
});



menu.addEventListener('click', () => {
    modal.setAttribute('active', 'false');
    if (modal.getAttribute('active') === 'false') {
        modal.setAttribute('active', 'true');
        modal.removeAttribute('hidden');
        menu.setAttribute('hidden','');
        console.log('Menu activated');
    } else {
        modal.setAttribute('active', 'false');
        modal.setAttribute('hidden', '');
        console.log('Menu deactivated');
        menu.removeAttribute('hidden');
    }
});




firstDropdown.addEventListener('click',()=>{
    const features=document.querySelector('.features');
    
       if(!firstDropdown.getAttribute('active')){
        firstDropdown.setAttribute('active','true');
        features.style.display='flex';
        firstArrow.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
       }
       else if(firstDropdown.getAttribute('active')==='true'){
        firstDropdown.removeAttribute('active');
        features.style.display='none';
        firstArrow.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
       }
});


secondDropdown.addEventListener('click',()=>{
    const company=document.querySelector('.company');
    
       if(!secondDropdown.getAttribute('active')){
        secondDropdown.setAttribute('active','true');
        company.style.display='flex';
        secondArrow.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
       }
       else if(secondDropdown.getAttribute('active')==='true'){
        secondDropdown.removeAttribute('active');
        company.style.display='none';
        secondArrow.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
       }
});


const checkSize=()=>{
    const width = window.innerWidth;
    
    if (width < 650) {
        document.querySelector('.wrapper').setAttribute('hidden', '');
        document.querySelector('.wrapper-mobile').removeAttribute('hidden');
    } else {
        document.querySelector('.wrapper').removeAttribute('hidden');
        document.querySelector('.wrapper-mobile').setAttribute('hidden', '');
    }
}

checkSize();



window.addEventListener('load',checkSize);
window.addEventListener('resize',checkSize);


firstDropdownMobile.addEventListener('click',()=>{
    const featuresMobile=document.querySelector('.features-mobile');
    
       if(!firstDropdownMobile.getAttribute('active')){
        firstDropdownMobile.setAttribute('active','true');
        featuresMobile.style.display='flex';
        firstArrowMobile.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
       }
       else if(firstDropdownMobile.getAttribute('active')==='true'){
        firstDropdownMobile.removeAttribute('active');
        featuresMobile.style.display='none';
        firstArrowMobile.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
       }
});

secondDropdownMobile.addEventListener('click',()=>{
    const companyMobile=document.querySelector('.company-mobile');
    
       if(!secondDropdownMobile.getAttribute('active')){
        secondDropdownMobile.setAttribute('active','true');
        companyMobile.style.display='flex';
        secondArrowMobile.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>'
       }
       else if(secondDropdownMobile.getAttribute('active')==='true'){
        secondDropdownMobile.removeAttribute('active');
        companyMobile.style.display='none';
        secondArrowMobile.innerHTML='<svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>';
       }
});