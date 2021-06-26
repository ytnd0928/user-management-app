import { memo, VFC } from "react";
import { Text, Image, Box, Stack, Wrap, WrapItem } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  //divタグの代わりとなるBoxを使用
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
        >
          <Stack textAlign="center">
            <Image
              boxSize="160px"
              alt="プロフィール画像"
              margin="auto"
              borderRadius="full"
              src="https://source.unsplash.com/randam"
            />
            <Text fontSize="lg" fontWeight="bold">
              noda
            </Text>
            <Text fontSize="small" fontWeight="bold" color="gray">
              NODACHAN
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
