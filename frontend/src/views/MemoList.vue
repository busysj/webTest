<template>
  <div>
    <h1>메모</h1>
    <table>
      <tr v-for="(memo, i) in memo" :key="i">
        <td>{{ memo.id }}</td>
        <td>{{ memo.writer }}</td>
        <td @click="$router.push(`/list/${memo.id}`)">{{ memo.memo }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memo: [],
    };
  },
  created() {
    this.$http.get("/api/memo").then((response) => {
      console.log(response.data);
      this.memo = response.data;
    });
  },
};
</script>
