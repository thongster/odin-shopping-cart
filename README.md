Shopping Cart — React Project

Link to live demo: https://odin-shopping-cart-five-sable.vercel.app/

This project is a mock shopping cart built with React as part of The Odin Project’s React course. The goal was to practice real-world React patterns like routing via react-router, shared state via prop-drilling and useContext, component structure, CSS modules, and testing with vitest.

The app is a store for a (fake) small streetwear storefront with a home page, shop page, and cart page. Products are fetched from an external API from [Fake Store API](https://fakestoreapi.com/docs), users can add items to a cart, adjust quantities, and review totals. The app does not include a backend or checkout system.

This project helped me build upon and moved forward with basic React concepts and start "thinking in React" more. This includes considering states, props, not mutating states, getting more familiar with React rendering, structuring pages and reusable components. Very importantly, I had to consider testing throughout the entire app to ensure nothing breaks.

It was also a chance to "flex" and have a bit of fun through designing the website, all done with vanilla CSS.

Features

- Multi-page layout using React Router
- Home, Shop, and Cart pages
- Product data fetched from an external API
- Add-to-cart functionality with quantity controls
- Cart state shared across the app
- Order summary with subtotal, tax, and total
- Responsive navigation with a mobile hamburger menu
- Empty cart states and edge case handling
- Fully styled with a cohesive “after dark” streetwear theme

Tech used

- React
- React Router
- Vite
- CSS Modules
- React Testing Library
- Vitest
