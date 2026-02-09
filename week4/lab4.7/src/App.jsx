function ProfileIcon({ user }) {
    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
}

function Header({ user }) {
    return (
        <header>
            <ProfileIcon user={user} />
        </header>
    );
}

function App() {
    const user = "John Doe";

    return (
        <div>
            <Header user={user} />
        </div>
    );
}

export default App;