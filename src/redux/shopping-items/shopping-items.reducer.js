const INITIAL_STATE = {
  shoppingListDetails: [
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
          id: "9",
          name: "Chicken leg box",
        },
        {
          id: "10",
          name: "Chicken 1kg",
        },
        {
          id: "11",
          name: "Pork fillets 450g ",
        },
        {
          id: "12",
          name: "Salmon 1kg ",
        },
      ],
    },
    {
      id: "3",
      categoryName: "Beverages",
      items: [
        {
          id: "13",
          name: "Bournvita",
        },
        {
          id: "14",
          name: "Brownie Chocolate Drink",
        },
        {
          id: "14",
          name: "Choc-Ola",
        },
        {
          id: "15",
          name: "Gin",
        },
        {
          id: "16",
          name: "Irish Whiskey",
        },
        {
          id: "17",
          name: "Moonshine",
        },
      ],
    },
    {
      id: "4",
      categoryName: "Pets Food",
      items: [
        {
          id: "18",
          name: "Chicken leg box",
        },
        {
          id: "19",
          name: "Chicken 1kg",
        },
        {
          id: "20",
          name: "Pork Fillets",
        },
      ],
    },
  ],
};

const shoppingItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shoppingItemsReducer;
