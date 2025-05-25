# My Resume - David Rios Vélez

This is my Resume website, showcasing my skills, experience, education, and projects. I built this website with React and styled it using Tailwind CSS, designing it to provide a clean and responsive user experience using atomic design practices.

## Features

* **Profile Section:** This section introduces me as a Middle Software Developer and provides a brief overview of my experience. I am a Full Stack Java developer with more than 4 years of experience building and implementing backend and frontend solutions for scalable architectures in applications like SaaS for a marketplace.
* **Knowledge Section:** This section summarizes my core knowledge areas, including:
    * Full Stack Development
    * Cloud Platforms & DevOps
    * Software Architecture
    * System Analysis & Agile
    * Team Collaboration
    * Problem Solving
* **Sidebar Navigation:** A sidebar provides quick access to:
    * **Personal Info:** My name (David Rios), my title (Full Stack Developer), my age (26), my residence (CO), my freelance availability (Available), and my address (Medellín, Colombia).
    * **Languages:** My proficiency in multiple languages.
    * **Programming & Frameworks:** My key technical skills such as Java 8, 11, Javascript/Typescript, VueJs - Angular.
    * **Other Skills & Tools:** A list of additional skills including AWS (S3, EC2, SQS), Google Cloud, Docker, Maven, OOP, Communication, Problem solving, and Team work.
* **Education Section:** This section details my academic background, including my ongoing Systems Engineering degree.
* **Portfolio Section:** This section showcases a selection of my projects 
* **Social Links:** This provides easy access to my LinkedIn (`https://www.linkedin.com/in/david-ríos-vélez-3442501b4/`) and GitHub (`https://github.com/davidrios2`) profiles via a dedicated social navigation bar on the right side of the layout.
* **Modal Component:** I've implemented a reusable modal for displaying additional information, currently used for an "About Me" section stating that I am a Full Stack Java developer with more than 4 years of experience building and implementing backend and frontend solutions.

## Technologies Used

* **React.js:** A JavaScript library for building user interfaces.
* **Next.js:** A React framework for production-grade React applications.
* **Tailwind CSS:** A utility-first CSS framework for rapidly styling components.
* **React Icons (Fa):** For scalable vector icons.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    cd [your-repository-name]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

* **Content:** All textual content (names, descriptions, skills, project details) can be updated in the respective component files (`ProfileSection.tsx`, `KnowledgeSection.tsx`, `SidebarLeft.tsx`, `EducationSection.tsx`, `PortafolioSection.tsx`).
* **Images:** Replace placeholder images in the `public` directory with actual project screenshots or personal photos. Update `src` paths in components like `ProfileSection.tsx` and `PortafolioSection.tsx`.
* **Styling:** Modify Tailwind CSS classes directly within the components for design adjustments. For global styles or themes, adjust globals.css`.
* **Icons:** Add or change icons by importing different components from `react-icons/fa` or other icon libraries.

## Project Structure

This project follows a component-based architecture, specifically leveraging **Atomic Design** principles to organize UI elements from the smallest, reusable pieces to full page sections.

### Components:
The `src/components/` directory is where all reusable UI components are organized.

* **`atoms/`** - **The fundamental building blocks of matter.**
    These are the smallest possible UI elements that cannot be broken down further without losing their purpose. They are standalone and define the basic visual styles.
    * `Badge.tsx`: A small, self-contained component for displaying status or labels.
    * `Button.tsx`: Interactive elements for user actions.
    * `Card.tsx`: A generic container component with defined styling.
    * `Circle.tsx`: A circular shape component, possibly for avatars or decorative elements.
    * `Icon.tsx`: A base component for rendering icons.
    * `Img.tsx`: A wrapper for standard image rendering, potentially with optimized handling.
    * `Modal.tsx`: A dialog overlay component.
    * `ProgressBar.tsx`: A component to visualize progress.
    * `Typography.tsx`: Defines standard text elements like headings (`H1`, `H2`, `H4`) and paragraphs (`P`).

* **`molecules/`** - **Groups of atoms bonded together.**
    Molecules are simple UI components built from a few atoms. They function as a unit and have their own properties.
    * `Avatar.tsx`: Combines an `Img` (atom) with a `Circle` styling for a user avatar.
    * `EducationItem.tsx`: Displays a single education entry, typically composed of typography atoms.
    * `Footer.tsx`: A common section at the bottom of a page or component.
    * `IconLink.tsx`: A link component that contains an icon, used for social media or external navigation.
    * `InfoCard.tsx`: A card-like component displaying an icon, title, and subtitle, often used for presenting key information in sections like "Knowledge".
    * `PortafolioCard.tsx`: A specialized card for displaying portfolio items, combining an image, title, description, and link.
    * `ProgressSkillBar.tsx`: A visual bar indicating skill proficiency.
    * `SkillSet.tsx`: A component to display a list of skills, likely utilizing `ProgressSkillBar` and typography.

* **`organisms/`** - **Collections of molecules and atoms forming distinct sections of an interface.**
    Organisms are relatively complex UI components that form standalone sections within a page. They are often composed of molecules and atoms, providing more context and functionality.
    * `EducationSection.tsx`: The entire section dedicated to displaying educational history.
    * `KnowledgeSection.tsx`: The section showcasing various areas of expertise.
    * `PortafolioSection.tsx`: The full portfolio display area.
    * `ProfileSection.tsx`: The main introductory section of the portfolio.
    * `SidebarLeft.tsx`: The left-hand sidebar containing personal info, skills, and languages.
    * `SocialMediaNav.tsx`: The navigation bar for social media links.

### Templates:
The `src/templates/` directory contains page-level layouts or wireframes.

* **`templates/DefaultLayout.tsx`** - **Page-level objects that place organisms and molecules into a layout.**
    Templates are page-level components that arrange organisms and molecules into specific layouts. They represent the structure of a particular type of page.
    * `DefaultLayout.tsx`: A common layout component that provides the overall structure for the page, including `SidebarLeft`, `main`, and `SocialMediaNav` content areas.
  

### App:
The `src/app/` directory (Next.js App Router convention) handles routing and global aspects of the application.

* **`app/globals.css`**: Global stylesheet for the entire application, including Tailwind CSS imports.
* **`app/layout.tsx`**: The root layout for the entire application, wrapping all pages and providing common elements or providers.
* **`app/page.tsx`**: The primary page component for the root route (`/`), which assembles the different organisms and sections to form the home page.

# Link

[David Rios Resume](https://david-rios-portafolio.vercel.app)
