/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/App.tsx",
    "./src/components/navbar.tsx",
    "./src/components/sidebar.tsx",
    "./src/components/workspace.tsx",
    "./src/components/board.tsx"
  ],
  darkMode: "class", 
  theme: {
    colors: {
      lightmode: {
        "blanco": "#CFF5E7", 
        "verdeagua1": "#A0E4CB", 
        "verdeagua2": "#59C1BD", 
        "azul": "#0D4C92", 
      },
      darkmode: {
        "azul1": "#071E3D",
        "azul2": "#1F4287",
        "verdeagua1": "#278EA5",
        "verdeagua2": "#21E6C1"
      }
    }, 
  } ,
  plugins: [],
}
