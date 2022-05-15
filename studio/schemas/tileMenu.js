export default {
  name: "tileMenu",
  title: "Tile Menu",
  type: "object",
  description: "A 4 tile menu that animates as you scroll",
  fields: [
    {
      name: `tm1`,
      title: `Title Menu 1`,
      type: "tileMenuItem",
    },
    {
      name: `tm2`,
      title: `Title Menu 2`,
      type: "tileMenuItem",
    },
    {
      name: `tm3`,
      title: `Title Menu 3`,
      type: "tileMenuItem",
    },
    {
      name: `tm4`,
      title: `Title Menu 4`,
      type: "tileMenuItem",
    },
  ],
  preview: {
    select: {
      tm1: "tm1",
      tm2: "tm2",
      tm3: "tm3",
      tm4: "tm4",
    },
    prepare({ tm1, tm2, tm3, tm4 }) {
      return {
        title: "Four Tile Menu",
        subtitle:
          (tm1?.title || "blank") +
          " - " +
          (tm2?.title || "blank") +
          " - " +
          (tm3?.title || "blank") +
          " - " +
          (tm4?.title || "blank"),
      };
    },
  },
};
