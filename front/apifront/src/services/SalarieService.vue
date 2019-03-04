<script>
const allSalariesUrl = 'http://localhost:3333/salaries';
const salarieUrl = 'http://localhost:3333/salarie';

export default {
    getAllSalaries(){
        return fetch(allSalariesUrl)
        .then((response) =>
        {
            return response.json();
        })
    },
    getSalarie(id){
        return fetch(`${salarieUrl}${id}`)
        .then((response) =>
        {
            return response.json();
        })
    },
    deleteSalarie(id){
        return fetch(`${salarieUrl}${id}`, {
            method: 'delete'
        })
        .then((response) => 
        {
            return response.json();
        })
    },
    updateSalarie(id, name, firstname, username, birthday, address, tel, mail, job){
        return fetch(`${salarieUrl}${id}`, {
            method: 'put',
            headers: {
                'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify(
            {
                "name": name,
                "firstname": firstname,
                "username": username,
                "birthday": birthday,
                "address": address,
                "tel": tel,
                "mail": mail,
                "job": job
            })
        })
        .then((response) =>
        {
            return response.json();
        })
    },
    createSalarie(name, firstname, username, birthday, address, tel, mail, job) {
        return fetch(salarieUrl, {
            method: 'post',
            headers: {
                'accept':'application/json',
                'content-type':'application/json'
            },
            body: JSON.stringify(
            {
                "name": name,
                "firstname": firstname,
                "username": username,
                "birthday": birthday,
                "address": address,
                "tel": tel,
                "mail": mail,
                "job": job
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