const firstDropdown=document.querySelector('.features-relative');
const secondDropdown=document.querySelector('.company-relative');
const features=document.querySelector('.features');
const company=document.querySelector('.company');

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
    }
}


firstDropdown.addEventListener('click',dropdown(firstDropdown,features));
secondDropdown.addEventListener('click',dropdown(secondDropdown,company));