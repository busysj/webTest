<template>
  <div>
    <h1>메모</h1>
    <table>
      <tr v-for="(memo, i) in memo" :key="i">
        <td>{{ memo.id }}</td>
        <td>{{ memo.writer }}</td>
        <td @click="$router.push(`/list/${memo.id}`)">{{ memo.memo }}</td>

        <!-- 수정 버튼을 눌렀을 때, UpdateForm 이동(화면출력) -->
        <td>
          <button @click="$router.push(`/updateform/${memo.id}`)">수정</button>
        </td>
        <!-- 삭제 버튼을 눌렀을 때, 삭제할 memo.id를 서버로 전송(데이터) -->
        <td><button @click="deletememo(memo.id)">삭제</button></td>
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
  methods: {
    deletememo(id) {
      // axios를 통해 id값을 가진 memo를 삭제
      this.$http.delete(`/api/memo/${id}`).then((response) => {
        // 값이 삭제된 메모배열을 다시 할당
        // 서버로 요청해서 값이 삭제되었지만 화면에 적용하기 위해서 메모배열을 들고옴
        this.memo = response.data;
      });
    },
  },
};
</script>
