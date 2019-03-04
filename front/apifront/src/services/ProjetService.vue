<script>
const allProjetsUrl = 'http://localhost:3333/projets';
const projetUrl = 'http://localhost:3333/projet';

export default {
    getAllProjets(){
        return fetch(allProjetsUrl)
        .then((response) =>
        {
            return response.json();
        })
    },
    getProjet(id){
        return fetch(`${projetUrl}${id}`)
        .then((response) =>
        {
            return response.json();
        })
    },
    deleteProjet(id){
        return fetch(`${projetUrl}${id}`, {
            method: 'delete'
        })
        .then((response) => 
        {
            return response.json();
        })
    },
    updateProjet(id, name, desc, datestart, dateend, cost, status){
        return fetch(`${projetUrl}${id}`, {
            method: 'put',
            headers: {
                'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify(
            {
                "name": name,
                "desc": desc,
                "datestart": datestart,
                "dateend": dateend,
                "cost": cost,
                "status": status
            })
        })
        .then((response) =>
        {
            return response.json();
        })
    },
    createProjet(name, desc, datestart, dateend, cost, status) {
        return fetch(projetUrl, {
            method: 'post',
            headers: {
                'accept':'application/json',
                'content-type':'application/json'
            },
            body: JSON.stringify(
            {
                "name": name,
                "desc": desc,
                "datestart": datestart,
                "dateend": dateend,
                "cost": cost,
                "status": status
            })
        })
        .then((response) =>
        {
            return response.json();
        })
        .catch((err) => {
                console.log(err);
        });
    }
}
</script>