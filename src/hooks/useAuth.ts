import { useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  //ローディング時ログインボタンを非活性化させるUIにする。
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      //laoding時のUI作成
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            //ログインしたときにshowMessage,titleにログインしましたを当てて、statusにsuccessを当てる
            showMessage({ title: "ログインしました！", status: "success" });
            history.push("/home");
          } else {
            alert("ユーザーが見つかりません");
          }
        })
        .catch(() => alert("ログインできません"))
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login };
};
