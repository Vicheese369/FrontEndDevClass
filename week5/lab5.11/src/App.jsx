const User = ({firstName,lastName, title})=>{
  return(
      <div className='bg-yellow-400 text-center py-6 px-6 rounded-lg mb-4'>
        <h2 className="text-xl font-bold mb-1">
          {firstName} {lastName}
        </h2>
        <p className='text-xs uppercase tracking-wide'>
          {title}
        </p>
      </div>
  )
}
function App(){
    const user1 = {
    firstName: "Vinh",
    lastName: "Hoang Nhu",
    title: "PN Training Manager"
  };

  const user2 = {
    firstName: "My",
    lastName: "Ngo",
    title: "PN Trainer"
  };
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h1 className="text-white text-4xl font-bold text-center mb-8">
            PNV REACT TEAM !!
          </h1>
          <p className="text-gray-400 text-center mb-6">
            Here are some PNV React masters, do you know them?
          </p>
          <User
              firstName={user1.firstName}
              lastName={user1.lastName}
              title={user1.title}
          />
          <User
              firstName={user2.firstName}
              lastName={user2.lastName}
              title={user2.title}
          />
        </div>
      </div>
  );
}
export default App;