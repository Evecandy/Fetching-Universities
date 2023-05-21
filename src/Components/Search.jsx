

function SearchComponent({onSubmit}) {
    return (
        <>
            <form id="search-form" onSubmit={onSubmit}>
                <input type="text" name="country" placeholder="Type country name"/>
                <input type="submit" value="Search" />

            </form>
        </>
    )
}

export default SearchComponent