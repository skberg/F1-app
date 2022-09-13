





import useSWR from 'swr'


function RaceData() {
    const{ data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/')
    if (error) {
        return <p>Failed to load Data</p>
    }
    if (!data) {
        return <p>Loading....</p>
    }
    return (
        <div>
            <h1>TODO List</h1>
            <ul>
                {data.map( toDo =>
                    <li key={toDo.id}>
                        {toDo.title} - <span>( {toDo.completed ? 'Completed' : 'Not Completed'} )</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default RaceData