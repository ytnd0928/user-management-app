import { useCallback, memo, VFC } from "react";
import { Flex, Heading, Link, useDisclosure, Box } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { useHistory } from "react-router-dom";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //useCallBack is a not funcitonのエラー表記が出る
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    [history]
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), [
    history
  ]);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          alogn="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <Link onClick={onClickUserManagement}>users</Link>
            <Link onClick={onClickSetting}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
      />
    </>
  );
});
