<template>
  <div class="container">
    <h1>アイテム登録フォーム</h1>
    <form @submit.prevent="addItem">
      <div>
        <label for="name">書名:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="price">価格 (円):</label>
        <input type="number" id="price" v-model.number="price" required />
      </div>
      <button type="submit">登録</button>
    </form>

    <h2>登録されたアイテム:</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.say() }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Item } from '~/item';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const name = ref('');
    const price = ref<number | null>(null);
    const items = ref<Item[]>([]);

    const addItem = () => {
      if (name.value && price.value !== null) {
        const newItem = new Item(name.value, price.value);
        items.value.push(newItem);
        name.value = '';
        price.value = null;
      }
    };

    return {
      name,
      price,
      items,
      addItem,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

form div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 100px;
}

input {
  padding: 5px;
  width: calc(100% - 110px);
}
</style>
