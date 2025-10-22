export const initialState = {
  totalPledged: 89914,
  goal: 100000,
  backers: 5007,
  bookmarked: false,
  pledges: [
    {
      id: "no-reward",
      title: "Pledge with no reward",
      min: 0,
      remaining: null,
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    {
      id: "bamboo",
      title: "Bamboo Stand",
      min: 25,
      remaining: 101,
      description:
        "You get an ergonomic stand made of natural bamboo. You’ll be added to a special backer list. Shipping is included.",
    },
    {
      id: "black",
      title: "Black Edition Stand",
      min: 75,
      remaining: 64,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to a special backer list.",
    },
    {
      id: "mahogany",
      title: "Mahogany Special Edition",
      min: 200,
      remaining: 0,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-shirt, and a personal thank you. You’ll be added to a special backer list.",
    },
  ],
};
