

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
