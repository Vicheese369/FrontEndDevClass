import React, { useState } from 'react';
const AuthorInfo = ({ user }) => (
    <div>
        <p>Author: {user.name}</p>
        <p>Role: {user.role}</p>
    </div>
);
const PostHeader = ({ user }) => <AuthorInfo user={user} />;
const PostItem = ({ user }) => <PostHeader user={user} />;
const FeedList = ({ user }) => <PostItem user={user} />;
function App() {
    const [user] = useState({ name: "Ronan", role: "Admin" });
    return <FeedList user={user} />;
}
export default App;

