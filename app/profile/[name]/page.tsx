type ProfilePageProps = {
    params : Promise<{name : string}>;
};
export default async function ProfilePage({params}) {
    const users = [
        {
            id : 1,
            name : 'Rohan',
            email : 'rohan.gupta@gmail.com',
            bio : 'Software engineer with a passion for web development and open-soure contributions.'
        },
        {
            id : 2,
            name : 'Anshika',
            email : 'anshika@gmail.com',
            bio : 'UX Designer with a focus on creating intutive and engaging user experience.'
        },
        {
            id : 3,
            name : 'Akanshi',
            email : 'akanshi@gmail.com',
            bio : 'Full-stack developer with expertise in react and Node.js, building scalable web applications.'
        }
    ]
    const pageParams = await params
    const username = pageParams.name
    // console.log('profil page of user is...');
    const user = users.find(user => user.name.toLowerCase() === username.toLowerCase())
    if(!user) {
        return (
            <div>
                <h1>User not found</h1>
                <p>The user with the name "{username}" does not exist.</p>
            </div>
        )
    }
    return (
        <div>
            <h1>{user?.name}'s' Profile Page</h1>
            <p>Email : {user?.email}</p>
            <p>Bio : {user?.bio}</p>

        </div>
    )
}