import { memo, VFC } from "react";
import { Text, Image, Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organism/user/UserCard";

export const UserManagement: VFC = memo(() => {
  //divタグの代わりとなるBoxを使用
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="のだちゃん"
          fullName="nodachan"
        />
      </WrapItem>
    </Wrap>
  );
});
