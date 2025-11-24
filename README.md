# Crowdfund Product Page

A responsive crowdfunding UI built with **React** and **Tailwind CSS**.
Users can browse pledge tiers, select a reward, enter a custom pledge amount, and support a product.
This project is a solution to the Browser Extension Manager UI challenge on [Frontend Mendtor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR).

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

- **React state flow:** How to manage controlled inputs and conditional UI based on user interactions.
- **Modal accessibility:** Focus trapping, keyboard navigation, and proper aria attributes.
- **Dynamic rendering:** Showing/hiding UI sections depending on selected pledge tier.
- **Tailwind CSS patterns:** Creating reusable components and clean utility-based styles.
