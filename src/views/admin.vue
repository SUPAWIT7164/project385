<template>
  <div>
    <h1 align="center">admin</h1>
    <input
      v-model="maleaw"
      class="form-control"
      type="text"
      placeholder="ลำดับ"
      aria-label="default input example"
    />
    <input
      v-model="lukeja"
      class="form-control"
      type="text"
      placeholder="สินค้า"
      aria-label="default input example"
    />
    <input
      v-model="chudkokowa"
      class="form-control form-control-sm"
      type="text"
      placeholder="จำนวนสินค้า"
      aria-label=".form-control-sm example"
    />
    <input
      v-model="tinu"
      class="form-control"
      type="text"
      placeholder="ราคา"
      aria-label="default input example"
    />
    <button class="btn btn-primary" @click="adddata()">add</button>
  </div>
</template>
<script>
import { collection, addDoc } from "firebase/firestore";
import {db} from '../Plugin/firebaseinit'
export default {
  data() {
    return {
      details: [],
      maleaw: "",
      lukeja: "",
      chudkokowa: "",
      tinu: "",
    };
  },
  methods: {
    async adddata() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          id: this.maleaw,
          name: this.lukeja,
          price: this.chudkokowa
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
