# Eames Chair Card Website

This project is a showcasing website that allow user to navigate and learn about the history and the design of Eames chair.

## Main Features

### Navigation Bar

Navigation bar enable user to navigate among different genres of the Eames chair.

### Card Selection

All the product card can be selected, hovered, and de-selected.

### Speaking Sound

When user pressed a card, openAI api will be called to speak about the history and the design of that product.

## How to implement

In order to fully implement the demo, a .env.local is needed in the Top-level folder, which is the same folder that contain .json files.

In the .env.local file, it contains `REACT_APP_OPENAI_API_KEY=`, and you need to paste your openAI api key after `=`. No `''`needed.