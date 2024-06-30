document.addEventListener('DOMContentLoaded', async function() {
    const imgUser = document.querySelector('#img-user');
    const nameUser = document.querySelector('#name-user');
    const profileUser = document.querySelector('#profile-user');
    const totalRepositorios = document.querySelector('#numero-repositorios');
    const totalSeguidores = document.querySelector('#numero-seguidores');
    const totalSeguindo = document.querySelector('#numero-seguindo');
    const profileLink = document.querySelector('#profile-link');

    
    try {
        const resposta = await fetch('https://api.github.com/users/R4fael-Andrade')
        if (!resposta.ok) {
            throw new Error('Erro na requisição');
        }
        const json = await resposta.json();
        
        imgUser.src = json.avatar_url;
        nameUser.innerHTML = json.name;
        profileUser.innerHTML = `@${json.login}`;
        totalRepositorios.innerHTML = json.public_repos;
        totalSeguidores.innerHTML = json.followers;
        totalSeguindo.innerHTML = json.following;
        profileLink.href = json.html_url;
    } catch (erro) {
        alert('Ocorreu um erro ao buscar informações, tente novamente mais tarde');
        console.log(erro);
    }
})