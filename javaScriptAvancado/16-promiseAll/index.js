// Estados da promise
// pending: estado inicial, nem cumprido nem rejeitado
// fulfilled: significa que a operação foi concluida com sucesso
// rejected: significa que a operação falhou

//promise.all: se uma das promises der erro ele retorna erro independete se as outras promises derem fulfield
//promise.allSettled: se uma das promises der erro ele ainda vai dar o resultado das outras promises

const loadUsers = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name:"Daniel" },
                { id: 2, name:"Monize"},
            ]);
        }, 2000);
    })
};

const loadRepositories = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name:"Repo 1" },
                { id: 2, name:"Repo 2"},
            ]);
        }, 2000);
    })
};

const loadEvents = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Erro ao carregar os eventos!"))
        }, 2000);
    })
};

const loadAll = async () => {
    try {
        const result = await Promise.allSettled([
            loadUsers(),
            loadRepositories(),
            loadEvents()
        ])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

loadAll()