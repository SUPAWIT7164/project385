<template>
  <div id="app">
    <div class="container">
      <h1 align="center">Luminous Game Store</h1>
      <hr />
      <div class="row">
        <div class="col-md-3" v-for="item in products" :key="item">
          <div class="card h-100">
            <img
              :src="item.image"
              class="card-img-top"
              width="250"
              height="300,"
            />
            <div class="card-body">
              <h2 class="card-title">{{ item.name }}</h2>
              <p class="card-text">ราคา {{ item.Price }} บาท</p>
            </div>
            <div class="card-footer"></div>
            <div class="text-center">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="add(item)"
                >
                  add
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="deleteitem(index)"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <h4>ตะกร้าสินค้า</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">สินค้า</th>
              <th scope="col">จำนวนสินค้า</th>
              <th scope="col">ราคา</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in basket" :key="item">
              <th scope="row">1</th>
              <td>{{ item.Num }}</td>
              <td>{{ item.Pro }}</td>
              <td>{{ item.Quty }}</td>
              <td>{{ item.Pri }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Luminous",
  data() {
    return {
      basket: [],

      products: [
        {
          id: 1,
          name: "FIFA 22",
          Price: 700,
          image:
            "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png",
          active: false,
        },
        {
          id: 2,
          name: "Far Cry6",
          Price: 1300,
          image:
            "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png",
          active: false,
        },
        {
          id: 3,
          name: "Grand theft auto V",
          Price: 1000,
          image:
            "https://cdn.cdkeys.com/500x706/media/catalog/product/g/r/grand_theft_auto_v_5_gta_5_pc_4.jpg",
          active: false,
        },
        {
          id: 4,
          name: "Elden ring",
          Price: 1490,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/UAnLUUMdxA9cow8TEe8IfhuC.png",
          active: false,
        },
        {
          id: 5,
          name: "Minecraft",
          Price: 660,
          image:
            "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yCxtDvcnsHHvm5CTuL5BPN-uRTP",
          active: false,
        },
        {
          id: 6,
          name: "Moster Hunter",
          Price: 769,
          image:
            "https://s2.gaming-cdn.com/images/products/2155/orig/game-steam-monster-hunter-world-cover.jpg",
          active: false,
        },
        {
          id: 7,
          name: "Horizon",
          Price: 1990,
          image:
            "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png",
          active: false,
        },
        {
          id: 8,
          name: "Scum",
          Price: 550,
          image:
            "https://img.g2a.com/1080x1080/1x1x0/scum-steam-gift-europe/5b9ba5df5bafe3bab138afaa",
          active: false,
        },
      ],
    };
  },
  methods: {
    add(item) {
      this.basket.push({
        Num: item.id,
        Pro: item.name,
        Pri: item.Price,
      });
    },
    deleteitem(index) {
      this.basket.splice(index, 1);
    },
  },
};
</script>
<style>
#app {
  background-color: bisque;
}
h1 {
  text-align: center;
  color: blueviolet;
}
</style>
