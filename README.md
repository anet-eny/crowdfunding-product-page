# Crowdfunding Product Page

A responsive crowdfunding UI built with **React** and **Tailwind CSS**.
Users can browse pledge tiers, select a reward, enter a custom pledge amount, and support a product.
This project is a solution to the Browser Extension Manager UI challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR).

---

## Features

### 🎯 Interactive Pledge Flow

- Users can select a pledge tier (with or without a reward).
- Custom pledge amounts are validated based on each tier's minimum.
- Dynamic UI: additional input fields appear only when a tier is selected.

### 🧩 Component-Based Architecture

- Modular design using React components.
- Clean separation of state and UI logic (context, custom hooks).

### 🔄 Modal & Focus Handling

- Modal overlay with animated open/close states.
- Focus trapping logic ensures accessibility inside the modal.
- Keyboard-friendly: users can navigate pledge options with arrow keys.

### 🧮 Real-Time Calculations

- Total backed amount and number of backers update immediately after confirming a pledge.
- Progress bar and Campaign Summary reflect updated funding status.

### 💾 Basic Data Layer

- Pledge tiers are loaded from a static local JSON file.
- Selected pledge state is stored in component state and persisted to `localStorage`, so the user's selection survives page reloads.

---

## Key Learnings

- **React state flow**  
  I focused on understanding how to manage controlled inputs and conditional UI based on user interactions.

- **Modal accessibility**  
  I worked on implementing accessible modal behavior, including focus trapping, keyboard navigation, and the correct use of ARIA attributes. This gave me a clearer understanding of what is required to build a modal that is fully usable.

- **Dynamic rendering**  
  I learned how to conditionally render different UI sections based on the selected pledge tier.

- **React Context**  
  I gained more experience working with React Context, especially in separating global state from component-level state and ensuring that shared data remains consistent across the UI.

- **Custom React hooks**  
  I created several custom hooks to extract reusable logic and keep components cleaner and more focused. This helped improve the overall organization and maintainability of the project.

- **Tailwind CSS patterns**  
  I explored how to create clean, reusable components using utility-based Tailwind CSS classes. This helped me establish a more organized styling approach across the project.

---

## View Project

https://anet-eny.github.io/crowdfunding-product-page/
