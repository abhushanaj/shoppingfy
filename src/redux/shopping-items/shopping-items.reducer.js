const INITIAL_STATE = [
  {
    id: "1",
    categoryName: "Fruit and vegetables",
    items: [
      {
        id: "1",
        name: "Avocado",
      },
      {
        id: "2",
        name: "Banana",
      },
      {
        id: "3",
        name: "Bunch of carrots 5pcs",
      },
      {
        id: "4",
        name: "Eggplant 1 bag ",
      },
      {
        id: "5",
        name: "Pre-cooked corn 450g",
      },
      {
        id: "6",
        name: "Mandarin Nadorcott ",
      },
      {
        id: "7",
        name: "Piele De Sapo Melon ",
      },
      {
        id: "8",
        name: "Watermelon",
      },
    ],
  },
  {
    id: "2",
    categoryName: "Meat and Fish",
    items: [
      {
        id: "1",
        name: "Chicken leg box",
      },
      {
        id: "2",
        name: "Chicken 1kg",
      },
      {
        id: "3",
        name: "Pork fillets 450g ",
      },
      {
        id: "4",
        name: "Salmon 1kg ",
      },
    ],
  },
  {
    id: "3",
    categoryName: "Beverages",
    items: [
      {
        id: "1",
        name: "Bournvita",
      },
      {
        id: "2",
        name: "Brownie Chocolate Drink",
      },
      {
        id: "3",
        name: "Choc-Ola",
      },
      {
        id: "4",
        name: "Gin",
      },
      {
        id: "5",
        name: "Irish Whiskey",
      },
      {
        id: "6",
        name: "Moonshine",
      },
    ],
  },
  {
    id: "4",
    categoryName: "Pets Food",
    items: [
      {
        id: "1",
        name: "Chicken leg box",
      },
      {
        id: "2",
        name: "Chicken 1kg",
      },
      {
        id: "3",
        name: "Pork Fillets",
      },
    ],
  },
];

const shoppingItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shoppingItemsReducer;
