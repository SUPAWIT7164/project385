<template>
  <div class="about">
    <form>
      <div class="container-sm">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text"></div>
      </div>
      <div class="container-sm">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="container-sm form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary" @click="submit()">
        Submit
      </button>
      <button class="btn btn-primary" @click="admin()">Admin</button>
    </form>
  </div>
</template>
<script>
export default {
  methods: {
    submit() {
      this.$router.push("/Luminous");
    },
    admin() {
      this.$router.push("/admin");
    },
  },
};
</script>
<style>
#about {
  background-color: aqua;
}
</style>
