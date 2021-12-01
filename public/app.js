

// alterando a classe .active em .links
 const links= document.querySelectorAll(".link");
//  metodo para percorrer os docs do .link e remover o .active da pagina anterior,adicionando o .active no .link clickado
links.forEach(link => {
    link.addEventListener('click',()=>{
        links.forEach(ele=> ele.classList.remove('active'));
        link.classList.add('active');
    })
    
});
// Criação das janelas dinamica,do project-container

const projectContainer = document.querySelector('.project-container');

// integração do Project.js como o elemento project-container
 
projects.forEach(project =>{
    projectContainer.innerHTML +=`<div class="project-card" data-tags="#all, ${project.tags}">
    <img src="img/${project.image}" alt="">
    <div class="content">
        <h1 class="project-nameP">${project.name}</h1>
        <span class="tags">${project.tags}</span>
    </div>
</div>`;

})
// filtros
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn =>{
    filterBtn.addEventListener('click', () =>{
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card =>{
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            }   else{
                card.classList.add('hide')
            }
        })
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active')
    })
})

// Contact form
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const msg = document.querySelector('.message');

contactBtn.addEventListener('click',() => {
    if(firstName.value.length && lastName.value.length && email.value.length && msg.value.length){
        fetch('/mail', {
            method:'post',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify({
                firstName: firstName.value,
                lastName:lastName.value,
                email: email.value,
                msg:msg.value,
            })
        })
        .then(res=> res.json())
        .then(data=>{
            alert(data);
        })
        
    }
})

