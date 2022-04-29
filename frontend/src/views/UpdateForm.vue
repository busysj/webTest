<template>
  <div>
    <h1>글을 수정하는 곳입니다</h1>
    <input type="text" v-model="memo.title" /> <br />
    <textarea cols="30" rows="10" v-model="memo.memo"></textarea> <br />
    <button @click="updatememo">수정</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memo: {
        title: "",
        memo: "",
      },
    };
  },
  created() {
    this.$http.get(`/api/memo/${this.$route.params.id}`).then((response) => {
      this.memo = response.data;
    });
  },
  methods: {
    // axios를 이용해 제출 버튼을 눌렀을 때 값을 수정해줌 - put
    updatememo() {
      this.$http
        .put("/api/memo/updateform", {
          data: {
            // 객체 자체를 보내줌
            memo: this.memo,
          },
        })
        .then((response) => console.log(response.data));
      this.$router.push("/");
    },
  },
};
</script>
