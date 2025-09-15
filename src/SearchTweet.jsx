function SearchTweet({onChange}) {
    return(
    <>
    <div className='search-section'>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input className="search" type="text" placeholder="Search Twitter" onChange = {onChange} />
                </div>
    </>
    )
}
export default SearchTweet;