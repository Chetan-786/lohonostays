import { useState } from "react";
import NewsArticles from "./components/NewsArticles";
import NewsBody from "./components/NewsBody";

export default function NewsPage () {

    const [ displayPagination, setDisplayPagination ] = useState(true);
    const [ page, setPage ] = useState(1);
    const [ search, setSearch ] = useState("");

    // pass data to other components bases on search and pagination filter
    const dataChangeFn = (val, type) => {
        if(type){
            setSearch(val);
        } else{
            setPage(val);
        }
    }
    const showPaginationsFn = (data) => {
        try {
            setDisplayPagination(data)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <div className="newsArticles">
            <NewsArticles pageProps = {dataChangeFn} searchProps={dataChangeFn} pagePropsVal= {page} 
            displayPaginationProps = {displayPagination} />
        </div>
        <div className="newsBody">
            <NewsBody pagePropsVal= {page} searchPropsVal = {search} showPaginationsBool = {showPaginationsFn} />
        </div>
        </>
    )
}