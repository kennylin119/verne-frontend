# Verne Frontend

This is the frontend for Verne's voice/chat LLM. 

## How to Run Locally

1. Clone the repository  
   `git clone https://github.com/your-username/verne-frontend.git`
2. Navigate to the project directory  
   `cd verne-frontend`
3. Install dependencies  
   `npm install`
4. Start the development server  
   `npm run dev`
5. Open your browser to  
   [http://localhost:5173](http://localhost:5173)

## Technologies Used 

1. Tailwind CSS 
    - Tailwind CSS is a utlity-first CSS framework that provides pre-built classes you can use directly in your HTML or JSX. This saves you from needing to write custom CSS for each component, which lets you iterate faster, replicate designs easier and maintain a consistent styling. It's also desgined to be mobile-first by default but also scalable for larger screen sizes. 
2. Vite 
    - Vite is the build tool used to develop and serve this project. It's optimized for speed, simplicity and performs better than Create React App. It also works seamlessly with Tailwind. 

## Update Log 

### Week 0 

Task Completed: 
- Built question and answer text screen in line with UI/UX diagram
- Built input text bar that appears and disappears when pressing the Text button and X button

Extra Work: 
- Added iconology for menu, edit, save response, mic, and play text audio
- Added support for submitting questions in input text bar, and demo answer prompts in reply

<p float="left">
   <img src="https://github.com/kennylin119/verne-frontend/blob/main/Progress%20Pics/Week%200%20Homepage-1.png" width="250">
   <img src="https://github.com/kennylin119/verne-frontend/blob/main/Progress%20Pics/Week%200%20Homepage.png" width="250">
   <img src="https://github.com/kennylin119/verne-frontend/blob/main/Progress%20Pics/Week%200%20Responsive%20Input%20Q%26A.png" width="250">
</p>


### Week 1 
- Built sidebar that appears when clicking the "Menu" icon and disappears when clicking the "X" icon
- Added background blur and opacity behind sidebar in line with UI/UX 

Extra Work:
- Made sidebar responsive to different mobile and desktop screensizes
- Sidebar also closes when clicking outside of window
- Updated sizing of UI elements 

<p float="left">
   <img src="https://github.com/kennylin119/verne-frontend/blob/main/Progress%20Pics/Week%201%20Homepage.png" width="250"> 
   <img src="https://github.com/kennylin119/verne-frontend/blob/main/Progress%20Pics/Week%201%20Sidebar.png" width="250">
</p>

### Week 3 
- Built default homepage with welcome splash text
- Built custom animation for voice assistant listening phase 

Extra Work
- Created defined window for text elements to prevent overlap with bottom UI elements
- Added demo q&a functionality to test out voice assistant animation and user flow after clicking mic button 

   <img src="https://github.com/kennylin119/verne-frontend/blob/dbb9ca996e73e4aa042de5217f5e9697ae0eafd1/Progress%20Pics/Week%202%20Progress%20Video.gif" width="250">

