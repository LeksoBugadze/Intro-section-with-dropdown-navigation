const firstDropdown=document.querySelector('.features-relative');
const secondDropdown=document.querySelector('.company-relative');
const firstDropdownMobile=document.querySelector('.featues-mobile');
const secondDropdownMobile=document.querySelector('.company-mobile');
const features=document.querySelector('.features');
const company=document.querySelector('.company');
const featuresMobile=document.querySelector('.features-options-mobile');
const companyMobile=document.querySelector('.company-options-mobile');
const sidebar=document.querySelector('.sidebar');
const modal=document.querySelector('.modal');
const menu=document.querySelector('.menu');
const close=document.querySelector('.close');

const dropdown=(dropdownNum,dropdownList)=>{
    dropdownNum.setAttribute('active','false');
   return ()=>{ 
        if(dropdownNum.getAttribute('active')==='false'){
            dropdownNum.setAttribute('active','true');
            dropdownList.style.display='flex';
        }else {
            dropdownNum.setAttribute('active','false');
            dropdownList.style.display='none';
        }
        console.log('works');
    }
}


const openMenu=()=>{
    modal.setAttribute('active','false');

    if(modal.getAttribute('active')==='false'){
        modal.style.display='block';
        sidebar.style.display='flex';
        modal.setAttribute('active','true');
        menu.setAttribute('hidden','');
    }
}

const closeMenu=()=>{
    modal.setAttribute('active','false');
    modal.style.display='none';
    sidebar.style.display='none';
    menu.removeAttribute('hidden');
}


firstDropdown.addEventListener('click',dropdown(firstDropdown,features));
secondDropdown.addEventListener('click',dropdown(secondDropdown,company));
menu.addEventListener('click',openMenu);
close.addEventListener('click',closeMenu);
firstDropdownMobile.addEventListener('click',dropdown(firstDropdownMobile,featuresMobile));
secondDropdownMobile.addEventListener('click',dropdown(secondDropdownMobile,companyMobile));