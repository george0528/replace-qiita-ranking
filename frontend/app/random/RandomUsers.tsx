export default async function RandomUsers() {
    const randomUsers = await fetch('https://random-data-api.com/api/v2/users', {cache: 'no-store'});
    const randomUsersData = await randomUsers.json();
    return (
        <div>
            id: {randomUsersData.id}
        </div>
    )
}
