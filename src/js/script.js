document.addEventListener('DOMContentLoaded', ()=>{
    const refs = {
        burger: document.querySelector('.burger'),
        list: document.querySelector('.header-nav_list')
    }
    refs.burger.addEventListener('click',()=>{  
        refs.list.classList.toggle('active');
        if(refs.list.classList.contains('active')){
            refs.list.style.display = 'flex';
        } else{
            refs.list.style.display = 'none';
        }
    });
    onepagescroll('.wrapper');
});