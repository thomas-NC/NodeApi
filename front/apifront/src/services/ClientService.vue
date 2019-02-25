<script>
const allClientsUrl = 'http://localhost:3333/clients';
const clientUrl = 'http://localhost:3333/client';

export default {
    getAllClients(){
        return fetch(allClientsUrl)
        .then((response) =>
        {
            return response.json();
        })
    },
    getClient(id){
        return fetch(`${clientUrl}${id}`)
        .then((response) =>
        {
            return response.json();
        })
    },
    deleteClient(id){
        return fetch(`${clientUrl}${id}`, {
            method: 'delete'
        })
        .then((response) => 
        {
            return response.json();
        })
    },
    updateClient(id, name, adress, refcontact, activity){
        return fetch(`${clientUrl}${id}`, {
            method: 'put',
            headers: {
                'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify(
            {
                "name": name,
                "adress": adress,
                "refcontact": refcontact,
                "activity": activity
            })
        })
        .then((response) =>
        {
            return response.json();
        })
    },
    createClient(name, adress, refcontact, activity) {
        return fetch(clientUrl, {
            method: 'post',
            headers: {
                'accept':'application/json',
                'content-type':'application/json'
            },
            body: JSON.stringify(
            {
                "name": name,
                "adress": adress,
                "refcontact": refcontact,
                "activity": activity
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