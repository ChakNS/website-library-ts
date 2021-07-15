import Main from "_c/main/main.vue";

export default [
  {
    path: "/tools",
    name: "tools",
    redirect: "/tools/list",
    component: Main,
    children: [
      {
        path: "list",
        name: "tools-list",
        component: (): Promise<typeof import("*.vue")> =>
          import(
            /* webpackChunkName: "index" */ "@/pages/tools/tools-list.vue"
          ),
      },
      {
        path: "decode",
        name: "tools-decode",
        component: (): Promise<typeof import("*.vue")> =>
          import(
            /* webpackChunkName: "index" */ "@/pages/tools/components/toolsDecode/decode.vue"
          ),
      },
    ],
  },
];
