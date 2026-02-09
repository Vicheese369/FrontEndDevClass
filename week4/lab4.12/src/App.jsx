function Header() {
    return (
        <div className="bg-gray-900 text-yellow-600 py-10 px-8 text-center rounded-lg mb-5">
            <h1 className="text-2xl font-bold mb-5 tracking-wide">
                WELCOME TO THIS COURSE!
            </h1>
            <p className="text-sm leading-relaxed max-w-2xl mx-auto text-gray-300">
                React (also known as React.js or ReactJS) is a free and open-source front-end
                JavaScript library for building user interfaces based on components. It is maintained by
                Meta (formerly Facebook) and a community of individual developers and companies.
                React can be used to develop single-page, mobile, or server-rendered applications
                with frameworks like Next.js. Because React is only concerned with the user interface
                and rendering components to the DOM, React applications often rely on libraries for
                routing and other client-side functionality.
            </p>
            <p className="text-xs mt-4 text-gray-400">
                You can find the React doc at https://react.dev/
            </p>
        </div>
    );
}
function App() {
    return (
        <div className="min-h-screen bg-gray-950 p-8">
            <Header />
            <div className="p-5">
            </div>
        </div>
    );
}

export default App;