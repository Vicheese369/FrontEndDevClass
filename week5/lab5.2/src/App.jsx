import React from 'react';
const text = "Reusable component!"
const Layout = ({ children }) => (
    <div className="app-container">
        <nav>Navbar</nav>
        {children}
        <footer>Footer</footer>
    </div>
);
function App(){
    return(
        <Layout children={text}>
        </Layout>
    )
}
export default App;