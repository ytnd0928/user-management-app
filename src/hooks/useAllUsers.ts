/* eslimt-disable react-hooks/exhoustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  //useCallbackでループを防ぐ
  const getUsers = useCallback(() => {
    //api取得中はtrue, apiを呼び出したタイミングでsetLoading, api終了時にはfalseに戻すfinallyを設定
    setLoading(true);
    //取得してくる値に方をつけたいから.get<>typesのapi.tsでユーザーの型を作成済み
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      //エラー時の処理
      .catch(() => {
        showMessage({
          title: "ユーザー取得に失敗したなり",
          status: "errorMessage"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { getUsers, loading, users };
};
