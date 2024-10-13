<template>
  <div class="container">
    <h1>名前入力フォーム</h1>
    <form @submit.prevent="sendName">
      <div>
        <label for="name">名前:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <button type="submit">送信</button>
    </form>

    <h2>バックエンドからのレスポンス:</h2>
    <div v-if="responseMessage">{{ responseMessage }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const name = ref('');
    const responseMessage = ref('');

    const sendName = async () => {
      if (name.value.trim() === '') {
        responseMessage.value = '名前を入力してください。';
        return;
      }

      try {
        const payload = { name: name.value };
        const response = await axios.post('http://localhost:8080/api/hello', payload);
        responseMessage.value = response.data.message;
        name.value = '';
      } catch (error) {
        console.error(error);
        responseMessage.value = 'エラーが発生しました。';
      }
    };

    return {
      name,
      responseMessage,
      sendName,
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
  width: 60px;
}

input {
  padding: 5px;
  width: calc(100% - 70px);
}

button {
  padding: 10px 20px;
}
</style>
