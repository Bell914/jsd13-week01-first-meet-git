# 🍽️ Flavorscape — Food Menu & Cart System

*A dynamic restaurant menu interface with a real-time shopping cart, built with vanilla JavaScript.*

Flavorscape is a browser-based food-ordering simulation that renders a menu dynamically from a structured JavaScript data source. Users can browse dishes, add items to a cart, adjust quantities, and view a live total — all without a page reload. Built as part of Week 1 of the **Generation Thailand (JSD13)** program, this project demonstrates foundational skills in DOM manipulation, object-oriented data modeling, and version control with Git and GitHub.

🔗 **Repository:** [Bell914/jsd13-week01-first-meet-git](https://github.com/Bell914/jsd13-week01-first-meet-git)

---

## 🚀 Live Demo

> [View the live site](https://github.com/Bell914/jsd13-week01-first-meet-git)  
> *(Update this link with your GitHub Pages URL once deployed.)*

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Dynamic Menu Rendering** | Dishes are rendered automatically from a JavaScript object — no hardcoded HTML. |
| **Add to Cart System** | Each menu card includes an "Add to Cart" button; items stack with quantity tracking. |
| **Real-time Calculation** | Subtotal updates instantly as quantities change or items are removed. |
| **Responsive Design** | Fully adaptive layout using CSS Flexbox, Grid, and custom properties. |
| **Version Control** | Codebase managed with Git and GitHub for structured collaboration. |

---

## 🛠️ Tech Stack

| Technology | Role |
|------------|------|
| **HTML5** | Page structure and semantics |
| **CSS3** | Styling, layout (Flexbox / Grid), custom properties |
| **Vanilla JavaScript (ES6)** | Data model, DOM rendering, cart logic |

---

## 📁 Project Structure

```
jsd13-week01-first-meet-git/
├── .gitignore          # Files and directories ignored by Git
├── index.html          # Main HTML page with embedded CSS and JS
├── my-array.js         # Simple array of dish names (flat list)
├── my-object.js        # Structured food database (array of objects)
├── PRD.md              # Product Requirements Document
└── README.md           # Project documentation (this file)
```

### Data Layer Breakdown

**`my-array.js`** — A plain array of available dish names used as a lightweight reference:

```javascript
let food = ["Pizza", "Malatang", "Pad Thai", "Burger", "Sushi", "Medovik"];
```

**`my-object.js`** — The primary data source. Each menu item is an object with typed properties. The file also exports a hero background URL and cuisine-based gradient fallbacks:

```javascript
let foodDatabase = [
    {
        id: 1,
        name: "Pizza",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 12.99,
        description: "Classic wood-fired pizza with San Marzano tomato sauce...",
        image: "https://images.unsplash.com/photo-1593504049359-..."
    }
    // 5 additional dishes follow the same schema
];

const heroBackground = "https://images.unsplash.com/photo-1504674900247-...";

const fallbackGradients = {
    Italian:  "linear-gradient(135deg, #f7971e, #ffd200)",
    American: "linear-gradient(135deg, #e43a15, #e65245)",
    Japanese: "linear-gradient(135deg, #1a1a2e, #c31432)",
    Chinese:  "linear-gradient(135deg, #c31432, #240b36)",
    Thai:     "linear-gradient(135deg, #f2709c, #ff9472)",
    Russian:  "linear-gradient(135deg, #2c3e50, #8e44ad)"
};
```

**Object schema (`foodDatabase` entries):**

| Property | Type | Description |
|----------|------|-------------|
| `id` | `number` | Unique identifier |
| `name` | `string` | Dish name |
| `cuisine` | `string` | Cuisine category |
| `origin` | `string` | Country of origin |
| `vegetarian` | `boolean` | Vegetarian-friendly flag |
| `price` | `number` | Price per serving (USD) |
| `description` | `string` | Short dish description |
| `image` | `string` | Unsplash image URL |

---

## 💻 Installation & Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Bell914/jsd13-week01-first-meet-git.git
   ```

2. **Open the project folder** in Visual Studio Code.

3. **Launch with Live Server:**
   - Right-click on `index.html` in the Explorer panel.
   - Select **Open with Live Server**.

   The application will open in your default browser. Any changes to the source files will trigger an automatic reload.

---

## 📈 Future Improvements

| Area | Planned Enhancement |
|------|-------------------|
| **Backend Integration** | Connect to a REST API or headless CMS for persistent menu and order data. |
| **User Authentication** | Add login/registration to support personalized carts and order history. |
| **Payment Gateway** | Integrate a mock or real payment provider (Stripe / PayPal sandbox). |
| **Search & Filter** | Filter dishes by cuisine, price range, or dietary preference. |
| **Unit Testing** | Add test coverage with Jest or Vitest for cart logic and data utilities. |
| **State Management** | Migrate cart state to a lightweight store (e.g., Zustand) for better scalability. |
| **Accessibility (a11y)** | Audit and improve keyboard navigation and screen-reader support. |
| **CI/CD Pipeline** | Automate linting, testing, and deployment via GitHub Actions. |
