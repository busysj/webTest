var express = require("express");
var router = express.Router();
const memos = require("../memo.json");
let count = 2;

router.get("/", function (req, res, next) {
  console.log(memos);
  res.send(memos);
});

router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  const m = memos.filter((memo) => {
    if (memo.id == id) {
      return true;
    }
  });
  res.send(m[0]);
});

router.post("/", function (req, res, next) {
  const memo = req.body.data;
  count++;
  const m = {
    id: count,
    title: memo.title,
    memo: memo.memo,
    writer: "익명",
  };
  memos.push(m);
  res.send("ok");
});

// 메모의 id값을 주소로 받아와서 삭제
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  // memo.id 값을 통해 memos의 인덱스를 찾아서 삭제
  // >> findindex()를 이용해서 조건이 참인 index값 찾을 수 있음
  const i = memos.findIndex((memo) => memo.id == id);

  // memos에서 제거
  memos.splice(i, 1);

  console.log(memos);
  res.send(memos);
});

// put을 통해 받아온 값 수정 : body의 data로 받아옴
router.put("/updateform", function (req, res, next) {
  const memo = req.body.data.memo;
  console.log(memo);

  // 메모의 인덱스를 찾아서 값을 할당
  // * title과 memo의 값이 바뀌었기 때문에, memo.id값으로 찾아야함
  const i = memos.findIndex((m) => memo.id == m.id);
  memos[i] = memo;
  res.send("ok");
});

module.exports = router;
