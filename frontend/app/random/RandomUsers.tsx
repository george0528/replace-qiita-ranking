export default async function RandomUsers() {
    const randomUsers = await fetch('https://random-data-api.com/api/v2/users', {cache: 'no-store', next: {revalidate: 0}});
    const randomUsersData = await randomUsers.json();
    return (
        <div>
            id: {randomUsersData.id}
        </div>
    )
}
