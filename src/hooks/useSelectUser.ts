//ユーザーがクリックされた時IDからユーザ〜をユーザ〜を取得する部分と、実際に一致したユーザーの情報を返す

import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  //ユーザーがクリックされた時にユーザーを特定する関数を返す
  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    //find:条件に一致すr最初の値を返す役割
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
  }, []);

  return { onSelectUser, selectedUser };
};
