export default function NewsArticles (props) {


    const changeFn = (e) => {
        props.searchProps(e.target.value, 1);
    }

    const navigatePage = (val) => {
        try {
            // don't allow the user to go behind 1st page
            if(!(props.pagePropsVal === 1 && val === -1)){
                props.pageProps(props.pagePropsVal + val);
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <h3>News Articles</h3>
            <input className="pd10" type="text" name="search" placeholder="Search" onChange={changeFn} />
            <div className="rightBtns">
                <button className="pd10" disabled={!props.displayPaginationProps} onClick={() => navigatePage(-1)}> Prev </button> &nbsp;
                <button className="pd10" disabled={!props.displayPaginationProps} onClick={() => navigatePage(1)}> Next </button>
            </div>
        </div>
    )
}