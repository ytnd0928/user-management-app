import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      {[...Array(10)].map(() => (
        <WrapItem>
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "teal" }}
          />
        </WrapItem>
      ))}
    </Wrap>
  );
});
