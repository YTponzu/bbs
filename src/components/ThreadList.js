import { useEffect } from "react";

const ThreadList = () => {
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((res) => res.json())
      .then((data) => console.log(data));
  })
}

export default ThreadList;