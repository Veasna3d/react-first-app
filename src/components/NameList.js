export const NameList = () =>{
    const names = ['Veasna', 'Khemra', 'Seyha']
    return (
        <div>
            {
                names.map((name) =>{
                    return <h2 key={name}>{name}</h2>
                })
            }
        </div>
    )
}