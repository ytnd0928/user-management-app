/* eslimt-disable react-hooks/exhoustive-deps */

import { memo, useCallback, useEffect, VFC } from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";
import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organism/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

export const UserManagement: VFC = memo(() => {
  //divタグの代わりとなるBoxを使用
  const { getUsers, users, loading } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUser();

  //画面表示時にユーザーを取得していきたい。useEffectで関数を使ってから配列を指定して初期マウント時に１回だけ実行できるようにする
  //getUsersを指定, 初回の１回だけで良いのでeslimtもコメントアウトをしておく
  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users });
    onOpen();
  }, []);

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
                onClick={onClickUser}
                id={user.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
