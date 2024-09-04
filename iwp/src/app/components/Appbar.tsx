import { Searchbar } from "./Searchbar"

export const Appbar = () => { 
    return (
        <div className="flex flex-row justify-between pb-3 ">
            <div className="text-3xl font-semibold text-white-700 pt-3 pl-5">
                AskIt
            </div>
            <div>
                <Searchbar />
            </div>
            <div className="text-3xl font-medium text-white-600 hover:text-gray-500 cursor-pointer pt-3 pr-5">
                Sign in
            </div>
        </div>
    )
}