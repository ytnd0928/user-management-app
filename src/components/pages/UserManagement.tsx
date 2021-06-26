/* eslimt-disable react-hooks/exhoustive-deps */

import { memo, useEffect, VFC } from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Wrap,
  WrapItem,
  Spinner,
  Center
} from "@chakra-ui/react";
import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  //divタグの代わりとなるBoxを使用
  const { getUsers, users, loading } = useAllUsers();
  //画面表示時にユーザーを取得していきたい。useEffectで関数を使ってから配列を指定して初期マウント時に１回だけ実行できるようにする
  //getUsersを指定, 初回の１回だけで良いのでeslimtもコメントアウトをしておく
  useEffect(() => getUsers(), []);
  return (
    //ローディング時はぐるぐるのUIを実行したい
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
