# React Portfolio Website - Development Guide

This is a versatile and feature-rich portfolio website built with React. It's designed to be easily customizable, allowing you to showcase your skills, experience, projects, and contributions in a polished, professional format. This guide will walk you through the project structure, customization process, and development patterns.

**Live Demo:** [https://anuragkj.github.io](https://anuragkj.github.io)

## ✨ Features

- **Easy Customization:** All personal data is centralized in a single file (`portfolio.js`) for quick and easy updates.
- **Theming:** Multiple pre-built themes are available and can be switched with a single line change.
- **Dynamic Project Section:** Automatically fetches and displays your pinned repositories from GitHub using the GitHub GraphQL API.
- **Open Source Contribution Showcase:** Dedicated sections to display your GitHub pull requests, issues, and contributed organizations.
- **SEO Optimized:** Includes dynamic meta tags, structured JSON-LD data, and an SEO-friendly header for better search engine visibility.
- **Responsive Design:** Ensures a great user experience on all devices, from mobile phones to desktops.
- **Animated & Interactive:** Smooth animations on scroll and interactive elements powered by `react-reveal`.
- **Splash Screen:** Optional loading animation for a professional first impression.

## 🛠 Tech Stack

- **Framework:** [React.js](https://reactjs.org/)
- **Styling:** [styled-components](https://styled-components.com/), CSS
- **Routing:** [React Router](https://reactrouter.com/)
- **Animations:** [React Reveal](https://www.react-reveal.com/)
- **API Communication:** [Apollo Client (GraphQL)](https://www.apollographql.com/docs/react/)
- **Charting:** [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/)
- **UI Components:** [Base Web](https://baseweb.design/) (for Accordion)
- **SEO:** [React Helmet](https://github.com/nfl/react-helmet)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/anuragkj/anuragkj.github.io-main.git
    cd anuragkj.github.io-main
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    This will open the project in your browser at `http://localhost:3000`. The page will automatically reload if you make any changes to the source files.

## 📁 Project Structure

The project follows a standard React application structure, separating components, containers, pages, and static assets.

```
anuragkj.github.io-main/
├── public/              # Static assets and index.html
└── src/
    ├── assests/         # Images, fonts, and other static assets
    ├── components/      # Reusable, presentational components (Button, Card, etc.)
    ├── containers/      # Larger page sections that group components (Greeting, Skills, etc.)
    ├── pages/           # Top-level components for each route (Home, Experience, etc.)
    ├── shared/          # Shared data, like static JSON for GitHub contributions
    ├── App.js           # Main application component with ThemeProvider
    ├── global.js        # Global styles using styled-components
    ├── index.js         # Entry point of the application
    ├── portfolio.js     # The main configuration file for all your personal data
    └── theme.js         # Theme definitions for the website
```

### Key Files and Directories

- `src/portfolio.js`: **This is the most important file for personalization.** It acts as a single source of truth for almost all content on the website, from your name and bio to your project details and social media links.
- `src/theme.js`: Contains the color schemes for different themes. You can switch the active theme here.
- `src/containers/Main.js`: Defines the application's routing using `react-router-dom`.
- `src/components/`: These are the building blocks of the UI. They are "dumb" components that receive data and functions as props and render UI. Examples include `Button.js`, `GithubRepoCard.js`, and `SocialMedia.js`.
- `src/containers/`: These are "smart" components that often manage state or logic for a specific section of a page. They compose multiple smaller components to build a complete section, like `Greeting.js` or `Projects.js`.
- `src/pages/`: These components represent entire pages. They assemble various `container` and `component` elements to create a complete view, like `HomeComponent.js` or `Experience.js`.

## 🎨 Customization Guide

This project is designed to be customized easily without diving deep into the code.

### 1. The Single Point of Truth: `portfolio.js`

Open `src/portfolio.js` and edit the JavaScript objects to reflect your personal information.

- `settings`: Toggle the splash screen on or off.
- `seo`: Update the title and description for search engine optimization.
- `greeting`: Your name, subtitle, resume link, and GitHub profile.
- `socialMediaLinks`: Your social media profiles. Add or remove objects as needed. Use Font Awesome icon names.
- `skills`: Define your skill categories. Each object corresponds to a skill section on the home page, complete with descriptions and a list of related technologies.
- `competitiveSites`: Links to your profiles on competitive programming platforms.
- `degrees`: Your educational background. Each object is a separate degree card.
- `certifications`: Your certifications. Each object creates a certification card.
- `experience`: Your work, internship, and volunteer history. This is broken into sections, each containing a list of experiences.
- `projectsHeader` & `publicationsHeader`: The titles and descriptions for the project and publication sections.
- `publications`: Your research papers or articles.
- `contactPageData`: Information for the "Contact Me" page, including your address and phone number.

### 2. Theming

To change the website's theme:

1.  Open `src/theme.js`.
2.  At the bottom of the file, find the line: `export const chosenTheme = blueTheme;`
3.  Change `blueTheme` to any of the other exported themes (e.g., `darkTheme`, `greenTheme`, `purpleTheme`).
4.  To create your own theme, simply copy one of the existing theme objects, rename it, modify the color hex codes, and set it as the `chosenTheme`.

### 3. GitHub Pinned Projects

The projects section on the home page dynamically fetches your pinned repositories from GitHub.

1.  **Generate a GitHub Personal Access Token (PAT):**

    - Go to [GitHub Developer Settings](https://github.com/settings/tokens).
    - Click "Generate new token".
    - Give it a name and select the `public_repo` scope.
    - Copy the generated token.

2.  **Add the Token to the Project:**

    - Open `src/containers/projects/Projects.js`.
    - Inside the `getRepoData` function, you will see a reference to `openSource.githubConvertedToken`. This value is expected to be a base64 encoded version of your PAT.
    - You can encode your token using an online tool or your terminal:
      ````bash
      echo -n 'YOUR_GITHUB_TOKEN' | base64
      ````

    **Using Environment Variables (Recommended):**
    a. Create a file named `.env` in the root of your project.
    b. Add your token to this file:

    ```
    REACT_APP_GITHUB_TOKEN=your_base64_encoded_token_here
    ```

    c. In `Projects.js`, replace `atob(openSource.githubConvertedToken)` with `process.env.REACT_APP_GITHUB_TOKEN`.
    d. **Important:** Add `.env` to your `.gitignore` file to prevent your token from being committed to your repository.

### 4. Open Source Contributions Data

The charts and lists on the "Open Source" page (`/opensource`) are populated from static JSON files located in `src/shared/opensource/`.

- `issues.json`
- `pull_requests.json`
- `organizations.json`

This data is not fetched live. You will need to run a script to gather this data from GitHub and update these files. While the script for this is not included in the repository, you can create one using the GitHub API or manually populate the data.

### 5. Adding a New Page

To add a new page (e.g., a "Blog" page):

1.  **Create the page component:**

    - Create a new directory `src/pages/blog/`.
    - Inside it, create `BlogComponent.js`. Build your page by composing components from `src/components` and `src/containers`.

2.  **Add the route:**

    - Open `src/containers/Main.js`.
    - Import your new `BlogComponent`.
    - Add a new `<Route>` inside the `<Switch>` statement:
      ```jsx
      <Route
        path="/blog"
        render={(props) => <Blog {...props} theme={this.props.theme} />}
      />
      ```

3.  **Add a link in the header:**
    - Open `src/components/header/Header.js`.
    - Add a new `<li>` item with a `<NavLink>` pointing to your new `/blog` route.

## 📦 Deployment

This project was built to be deployed on GitHub Pages, but it can be hosted on any static site hosting service like Netlify, Vercel, or AWS S3.

### To deploy on GitHub Pages:

1.  **Update `package.json`:**

    - Add a `homepage` field:
      ```json
      "homepage": "https://<your-github-username>.github.io/<your-repo-name>",
      ```

2.  **Install `gh-pages`:**

    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Add deploy scripts:**

    - In the `scripts` section of `package.json`, add:
      ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
      ```

4.  **Deploy:**
    ```bash
    npm run deploy
    ```
    This will build your application and push the contents of the `build` folder to a `gh-pages` branch on your GitHub repository.
