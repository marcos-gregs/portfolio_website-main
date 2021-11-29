

// alterando a classe .active em .links
 const links= document.querySelectorAll(".link");
//  metodo para percorrer os docs do .link e remover o .active da pagina anterior,adicionando o .active no .link clickado
links.forEach(link => {
    link.addEventListener('click',()=>{
        links.forEach(ele=> ele.classList.remove('active'));
        link.classList.add('active');
    })
    
});