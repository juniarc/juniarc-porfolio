import { WorkItemType } from "@/types/types";

export const workItemData: WorkItemType[] = [
  {
    id: 1,
    title: "arva",
    subtitle: "agriculture e-commerce",
    year: "2024",
    role: "front - end developer",
    image: "/images/arva-mockup.jpg",
    description:
      "A platform that connects local producers and artisans with consumers in their community, promoting sustainable consumption, supporting local economies, and reducing carbon footprints associated with long-distance shipping.",
  },
  {
    id: 2,
    title: "disscusify",
    subtitle: "discussion forum website",
    year: "2024",
    role: "front - end developer",
    image: "/images/disscusify-mockup.jpg",
    description:
      "Disscusify is a discussion forum website built for my Dicoding React Expert submission. User can create, explore, and engage in discussions with features like real-time interactions, search, category filtering, and secure authentication.",
    yPercent: "0",
    startTrigger: "top top",
    position: "mt-[30%] ml-auto",
  },
  {
    id: 3,
    title: "restofinder",
    subtitle: "resto finder website",
    year: "2024",
    role: "front - end developer",
    image: "/images/restofinder-mockup.jpg",
    description:
      "A restaurant discovery website developed for my Dicoding bootcamp submission. Features include a dynamic restaurant list, rating-based sorting, favorites, and search functionality.",
    yPercent: "-15",
    startTrigger: "top 30%",
    position: "ml-auto",
  },
];

export const detailWorkData = [
  {
    id: 1,
    title: "arva",
    subtitle: "agriculture e-commerce",
    year: "2024",
    role: "front - end developer",
    institusion: "final project revou",
    link: "https://www.arva.my.id/",
    image1: "/images/arva-mockup.jpg",
    image2: "/images/arva-landingpage.jpg",
    image3: "/images/arva-figma.jpg",
    heading1: "Building Arva: A Sustainable Agriculture Marketplace",
    heading2: "Key Features :",
    heading3: "Scope of Work",
    heading4: "Background & Objective",
    heading5: "My Approach to Solve the Problems",
    heading6: "Wrapping Up",
    desc1: `<p>Arva is an agriculture-focused e-commerce platform designed to connect local markets with buyers. The platform facilitates the buying and selling of agricultural products such as vegetables, fruits, seeds, equipment, and fertilizers. By bridging the gap between local producers and consumers, Arva promotes sustainable consumption, supports local economies, and reduces the environmental impact of long-distance shipping.</p>
<p>Arva was built using Next.js for the frontend, styled with Tailwind CSS and Material-Tailwind, and collaboratively designed in Figma. For backend, it was built by PostgreSQL and Flask. Successfully launched as a fully functional platform.</p>`,
    desc2: `<ul>
<li><strong>Online Store - </strong>Local producers can create their own stores and manage products.</li>
<li><strong>Payment Gateway - </strong>Simple payment gateway with vouchers and shipping fee based on distance.</li>
<li><strong>Shopping Cart</strong><strong>-</strong> Consumers can add products to their cart</li>
<li><strong>Nearby Product Search</strong><strong>-</strong> Consumers can discover products available in their area.</li>
</ul>`,
    desc3: `<p>This project was developed as the final group assignment for the RevoU Fullstack Developer Bootcamp. Our team consisted of three members, and I served as both the team leader and frontend developer. I led task coordination, ensured timely progress, and managed collaboration among the team. On the technical side, I was responsible for building the frontend architecture, working on web design for mobile, tablet and desktop and connecting between server and frontend for data transactions.</p>`,
    desc4: `<p>This project was undertaken as part of the RevoU Fullstack Developer Bootcamp, where students were grouped into teams of 4&ndash;5 members to complete a capstone assignment. The primary goal of this project was to apply the lessons learned throughout the bootcamp and develop an industry-standard website. It served as both a technical challenge and a practical demonstration of the team&rsquo;s ability to deliver a fully functional, real-world application.</p>
<p>The problem statement driving the project was rooted in the challenges faced by local producers and artisans in connecting with nearby consumers. Many communities struggle to sustain their local economies due to a lack of efficient marketplaces, which often leads to increased reliance on long-distance shipping. This reliance not only harms local businesses but also contributes to higher carbon emissions and unsustainable consumption patterns. To address this, the team aimed to develop a solution that bridges the gap between local producers and consumers, fostering local trade while promoting sustainable practices.</p>
<p>The project goals were defined by a comprehensive feature set, designed to tackle the problem holistically:</p>
<ol>
<li><strong>User Authentication and Authorization</strong>: The platform needed to support two user roles&mdash;consumers and sellers&mdash;ensuring secure access based on roles, while requiring account creation for purchases or product listings.</li>
<li><strong>Market Discovery and Product Details</strong>: Consumers should easily browse local markets, filter products by category or location, view product details, and leave reviews. A responsive, user-friendly design and robust search capabilities were critical to delivering this experience.</li>
<li><strong>Market Transactions and Promotions</strong>: Sellers needed the ability to list products, define promotions, and offer discounts through vouchers. For consumers, the platform had to provide a seamless transaction flow, including cart management, a checkout page, a simulated or integrated payment process, and a review system to enhance product feedback.</li>
<li><strong>Optional Features</strong>: Additional functionality, such as a referral system and wishlist feature, was included to enrich the user experience.</li>
</ol>`,
    desc5: `<p>To address the challenges outlined in the project, our team began by conducting thorough research and discovery. As the team leader, I guided the first phase of research, where each team member was tasked with analyzing at least one relevant agriculture e-commerce website. We used Miro as our platform for collaboration, and during our analysis, we evaluated various aspects such as design, product offerings, features, and the pros and cons of each site. This helped us identify strengths and weaknesses in existing solutions, and as a team, we discussed how to incorporate the best features into our platform while adding unique elements that would set Arva apart.</p>
<p>In my role as the frontend developer, I expanded the research by examining popular e-commerce platforms like Tokopedia, Amazon, and Shopee. I focused on their designs, features, and user interactions, which provided valuable insights that I translated into the design for Arva. By understanding successful design patterns in well-established e-commerce platforms, I could adapt these ideas to suit our agricultural market, ensuring that users would have an intuitive and efficient experience.</p>
<p>The next step was to plan and organize the development process. We prioritized core features that aligned with the project's objectives, such as user authentication, market discovery, and product transactions. We also incorporated additional features, like a wishlist system and promotions, to make the platform more engaging for users. I decided to break the development into manageable pages, focusing on one page at a time to ensure steady progress. I chose to use <strong>Next.js</strong> for the frontend, primarily because it offers powerful features like server-side rendering, static site generation, and great SEO benefits, which are crucial for building a scalable and performant e-commerce site.</p>
<p>For styling, I leveraged <strong>Material-Tailwind</strong>, a powerful combination of Tailwind CSS and Material Design components. This allowed me to build a beautiful, responsive, and user-friendly UI while maintaining consistency across the platform. The integration of Material-Tailwind helped us achieve a polished and professional design that enhanced the overall user experience.</p> <p>Throughout the development process, I used tools like <strong>Miro</strong> for brainstorming and notes, and <strong>Trello</strong> to track progress and manage tasks. To ensure that we stayed on target, I set weekly sprint goals and checked in with the team regularly to review progress. This structure allowed us to stay organized, collaborate effectively, and make sure we were on track to meet deadlines and deliver the features on time.</p>`,
    desc6: `<p>This project was a great learning experience, enhancing my skills in team collaboration and frontend development. It&rsquo;s rewarding to have created something that can support local communities.</p>
<p>Explore the website here: <a href="https://disscusify.vercel.app/">Disscusify - Discussion Forum App</a></p>
<p>View the GitHub repository here: <a href="https://github.com/juniarc/Disscusify">Disscusify GitHub Repository</a></p>`,
  },
  {
    id: 2,
    title: "disscusify",
    subtitle: "discussion forum website",
    year: "2024",
    role: "front - end developer",
    institusion: "react developer expert dicoding",
    link: "https://disscusify.vercel.app/",
    image1: "/images/disscusify-mockup.jpg",
    image2: "/images/disscusify-figma.png",
    image3: "/images/disscusify-vscode.png",
    image4: "/images/disscusify-landingpage.jpg",
    heading1: "Disscusify - Discussion Forum App",
    heading2: "Key Features",
    heading3: "Scope of Work",
    heading4: "Background & Objective",
    heading5: "My Approach to Solve the Problems",
    heading6: "Wrapping Up",
    desc1: `<p><strong>Disscusify</strong> is a discussion forum app built using React, aimed at providing a platform for users to discuss various topics, share insights, and engage in meaningful conversations. The app supports user authentication, thread creation, comments, likes and dislikes on threads and comments, as well as thread categorization to allow users to filter discussions based on their interests. A leaderboard is also included to recognize top users based on their contributions.</p>`,
    desc2: `<ul>
<li><strong>Create Discussion - </strong>User can create their own discussion.</li>
<li><strong>Interactive - </strong>User can like, dislike, and comment to a discussion.</li>
<li><strong>Search &amp; Filter - </strong>User can search and filter by category.</li>
<li><strong>Authentication - </strong>User can have their account that have username and photo profile</li>
</ul>`,
    desc3: `<p>As a front-end developer, I was responsible for implementing these features and ensuring a seamless user experience. Using Redux for state management allowed us to efficiently handle complex state logic, while ESLint ensured code quality and consistency. Additionally, we incorporated end-to-end testing with Cypress and unit testing with Jest to ensure the app&rsquo;s reliability and smooth functionality.</p>`,
    desc4: `<p>The <strong>Disscusify</strong> project was developed as part of my submission to complete the <strong>Expert React Developer</strong> course at Dicoding Academy. The goal of the project was to build a fully functional discussion forum application that meets all the mandatory specifications outlined by the instructor. The app needed to include features such as user authentication, thread management, likes and dislikes, comment functionalities, and a category filter, among others, in order to showcase proficiency in React and state management.</p>`,
    desc5: `<p>To start, I listed all the required features for the <strong>Disscusify</strong> app in my notes and researched design inspiration on Pinterest. I then converted these ideas into a clean, organized design using <strong>Figma</strong>.</p>
<p>For development, I first created wireframes and designed in figma before translating the design into the app using <strong>React JS</strong>. One of the most challenging aspects of the project was managing state with <strong>Redux</strong>. I had to carefully break down the logic for handling data requests from the server and managing UI state across different components.</p>
<p>To handle the state effectively, I created <strong>thunk functions</strong> to interact with the server, storing the returned data in the app&rsquo;s state via <strong>Redux reducers</strong>. I also organized the app by separating UI components and state management into distinct folders, which helped maintain a clean and scalable codebase.</p>`,
    desc6: `<p>The project was completed under the supervision of experts. To ensure the app met all the requirements, I focused on making sure that every feature functioned properly and was free of bugs. By thoroughly testing the app, I ensured a smooth user experience and that all functionalities were working as expected.</p>
<p>Explore the website here: <a href="https://disscusify.vercel.app/">Disscusify - Discussion Forum App</a></p>
<p>View the GitHub repository here: <a href="https://github.com/juniarc/Disscusify">Disscusify GitHub Repository</a></p>`,
  },
  {
    id: 3,
    title: "restofinder",
    subtitle: "resto finder website",
    year: "2024",
    role: "front - end developer",
    institusion: "front - end web developer expert dicoding",
    link: "https://restofinderproject.netlify.app/",
    image1: "/images/restofinder-mockup.jpg",
    image2: "/images/restofinder-landingpage.jpg",
    heading1: "Restofinder - Restaurant Catalogue",
    desc1: `<p><strong>Restofinder</strong> is a restaurant catalog website aimed at helping users easily discover and explore various restaurants. The project solves the problem of finding relevant and nearby dining options by providing users with a comprehensive list of restaurants, detailed information about each, and various filters to make the search experience more efficient.</p>
<p>Key features of <strong>Restofinder</strong> include a <strong>restaurant list</strong>, individual <strong>restaurant details</strong>, a <strong>search bar</strong> for easy discovery, <strong>sorting options</strong> to help narrow down choices, and a <strong>wishlist</strong> feature to save favorite spots for future visits. The wishlist is implemented using <strong>IndexedDB</strong> for local storage, and the website was built with a focus on accessibility and responsiveness.</p>
<p>The project was developed using a <strong>webpack</strong> environment with <strong>HTML</strong>, <strong>SCSS</strong>, and <strong>JavaScript</strong>. It is optimized for performance, with <strong>Progressive Web App (PWA)</strong> capabilities enabled by <strong>Workbox</strong> and <strong>REST API</strong> integration for dynamic data fetching. The app also includes <strong>image optimization</strong> using <strong>Imagemin</strong> and <strong>bundle optimization</strong> via <strong>code splitting</strong> to improve load times.</p>
<p>Explore the website here: <a href="https://restofinderproject.netlify.app/">Restofinder - Restaurant Catalogue</a></p>
<p>View the GitHub repository here: <a href="https://github.com/juniarc/RestoFinder">Restofinder GitHub Repository</a></p>`,
  },
];
