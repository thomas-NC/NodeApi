<template>
  <div class="home">
      <div class="titles">
        <h1>Project Handler</h1>
        <h2>Welcome to your api, you can have access to all the stats you need in order to run your business the way you want to </h2>
      </div>
      <div class="list">
        <p>You are currently working with <span class="stat-style">{{ info.clients }}</span> Clients</p>
        <p>You are currently working on <span class="stat-style">{{ info.projets }}</span> Projects</p>
        <p>You currently have <span class="stat-style">{{ info.salaries }}</span> Employees working for you</p>
      </div>
  </div>

  
</template>

<style lang="css" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 768px;
  width: 100%;
  background-image: url('../assets/img/bg-9.jpeg');
  background-position: center;
  background-size: auto 768px;
  background-repeat: no-repeat;
  font-family: "Raleway", sans-serif;
  background-color: black;
  
}
.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.titles h1 {
  display: flex;
  align-items: center;
  font-size: 50px;
  letter-spacing: 7px;
  text-align: center;
  max-width: 80%;
  background-color: rgba(0, 0, 0, 0.4);
  text-shadow: 2px 2px  #6c3483;
  min-height: 90px;
  border-radius: 2px;
  box-shadow: 2px 2px #48c9b0;
}
.titles h2 {
  font-size: 20;
  letter-spacing: 5px;
  text-align: center;
  max-width: 80%;
  line-height: 25px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  box-shadow: 2px 2px #48c9b0;
  text-shadow: 2px 2px  #6c3483;
  height: 100%;
}
.home .list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-bottom: 65px;
  max-width: 80%;
}
.home .list p {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  text-align: center;
  width: 100%;
  margin: 25px 0 25px 0;
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 55px;
  height: auto;
  box-shadow: 2px 2px #6c3483;
  border-radius: 2px;
  padding: 10px 20px 10px 20px;
}
.home .list p span{
  font-size: 35px;
  color: white;
  margin: 0 10px 0 10px;
  padding: 5px 0px 0 0;
  font-weight: bold;
  background-color: black;
  border-radius: 50px;
  text-shadow: 2px 2px  #6c3483;
  box-shadow: 2px 1px #48c9b0;
  min-width: 35px;
  min-height: 35px;
  font-family: 'Noto Sans KR', sans-serif;
}

</style>

<script>

export default {
  name: 'home',
  data() {
    return {
      info: []
    }
  },
  created() {
    fetch('http://localhost:3333/')
    .then((response) =>
    {
      return response.json();
    })
    .then((data) =>
    {
      this.info = data;
      console.log(this.info);
    })
  }
}
</script>
