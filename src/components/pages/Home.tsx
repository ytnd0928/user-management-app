import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
  return (
    <div>
      <p>ホームページです</p>
      <p>こんにちは</p>
    </div>
  );
});
