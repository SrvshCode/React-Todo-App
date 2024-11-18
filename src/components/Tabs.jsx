export default function Tabs({todos, selectedTab, setSelectedTab}){
       const tabs =["All","Open","Completed"];
    return (
        <nav>
            {
                tabs.map((tab,tabIndex)=>{
                    const numOfTasks= tab=== "All"?todos.length
                    :
                    tab ==="Open"? todos.filter(val => !val.completed).length
                    :
                    todos.filter(val=>val.completed).length;
                    return (
                        <button onClick={()=>{
                            setSelectedTab(tab)
                        }} key={tabIndex}><h4>{tab} <span>({numOfTasks})</span></h4></button>
                    )
                })
            }
            <hr/>

        </nav>
    )
}