import { memo, VFC } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    //onClickにid　を付与してどのユーザーなのかを区別する
    //1どのユーザーが押されたかをonClickで認識する必要がある
    //propsのonClickの引数にidとnumberを渡す
    //引数を渡す場合は関数を生成してそこに引数を渡す

    <Box
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          margin="auto"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="small" fontWeight="bold" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
