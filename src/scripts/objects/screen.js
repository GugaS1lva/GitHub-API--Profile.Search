const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto do Perfil do Usuário">
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado 😭!'}</h1>
                <p>${user.bio ?? 'Não possui nome cadastrado 😭!'}</p>
            </div>
        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li> <a href="${repo.html_url}" target="_blank" >${repo.name}</a> </li>`)
        console.log(repositoriesItems)
     
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</>

                <ul>${repositoriesItems}</>
            </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>[ERRO] - Usuário não encontrado!</h3>"
    }
}

export {screen}