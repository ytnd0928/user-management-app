import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  //再生成されないようにuseCallbackで囲う
  //メッセージの種類が違うのでpropsで受け取れるようにする。
  const showMessage = useCallback(
    (props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "bottom",
        //duraiton:指定した時間が経過すると勝手にメッセージが消える機能
        duration: 2000,
        //messageを閉じることができるかどうか, trueで閉じることができる。
        isClosable: true
      });
    },
    [toast]
  );
  return { showMessage };
};
