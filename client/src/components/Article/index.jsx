const index = ({date, description, title}) => {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <h3 className="text-xl font-bold">{title}</h3>
                <date>{date}</date>
            </div>
            <p className="max-w-[650px]">{description}</p>
        </div>
    )
}

export default index