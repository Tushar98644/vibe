const SearchBar = () => {
    return (
        <form>
            <div className="flex">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Articles" required />
                    <button type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium h-full text-white rounded-md focus:outline-none ">
                        <svg className="w-8 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

    );
}

export default SearchBar;