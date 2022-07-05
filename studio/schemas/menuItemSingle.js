const parentParent = (props) => {
  const parentID = props.parent._key;
  const pP = props.document.body
    .filter(
      (bodySection) =>
        bodySection._type === "productpricemenu" &&
        bodySection.menuSection &&
        bodySection.menuSection.filter((ms) =>
          ms.menuItemList.filter((mil) => mil._key === parentID)
        )
    )[0]
    .menuSection.filter((ms) => {
      let ret = false;
      ms.menuItemList.forEach((mil) => {
        if (ret === false) ret = mil._key === parentID;
      });
      return ret;
    })[0];
  return pP;
};

export default {
  name: "menuItemSingle",
  title: "Menu item single",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      hidden: (props) => {
        const pP = parentParent(props);
        return pP?.hasSizes;
      },
    },
    {
      name: "price_sm",
      title: "Price (SM)",
      type: "number",
      hidden: (props) => {
        const pP = parentParent(props);
        return !pP?.hasSizes;
      },
    },
    {
      name: "price_md",
      title: "Price (MD)",
      type: "number",
      hidden: (props) => {
        const pP = parentParent(props);
        return !pP?.hasSizes;
      },
    },
  ],
};
