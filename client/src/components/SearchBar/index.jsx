import { IoMdCloseCircleOutline } from "react-icons/io";

const index = ({searchTerm, setSearchTerm}) => {

    return (
        <div className="flex items-center w-[450px] py-2 px-4 border-2 border-gray-200">
            <input className="grow oultine-none border-none focus:outline-none" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" />
            <div><IoMdCloseCircleOutline onClick={e => setSearchTerm("")} size={22} className="cursor-pointer" /></div>
        </div>
    )
}

export default index