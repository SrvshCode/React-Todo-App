export default function Header({todos}){
    const isPluralTask = todos.length != 0 ? "tasks":"task";
    return (
        <header>
            <h1>You have {todos.length} open {isPluralTask}</h1>
        </header>
    )
}