//ここに"/"配下の3つの画面のルーティングを作成
export const Homeroots = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },

  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },

  {
    path: "/setting",
    exact: false,
    children: <Setting />
  }
];
