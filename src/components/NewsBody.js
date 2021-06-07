import { useState, useEffect } from "react";
import getNewsArticle from "../services";

export default function NewsBody (props) {
    const [ loadData, setLoadData ] = useState([]);


    const onLoadFn = async () => {
        try {
            const onLoadData = await getNewsArticle(props.pagePropsVal,props.searchPropsVal);
            setLoadData(onLoadData);
            // used to disable/enable paginations based on the data length
            if(onLoadData.length > 0){
                props.showPaginationsBool(true);
            } else {
                props.showPaginationsBool(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const actionFn = (id, text) => {
        alert(`Id: ${id} Text: ${text}`)
    }

    useEffect(() => {
        onLoadFn();
    },[props.searchPropsVal, props.pagePropsVal]);

    return (

        <>
            {loadData.length > 0 && loadData.map((data) => (
                <div key={data.id} className="boxData">
                <div className="thumbnailImg">
                    <img src={data.thumbnail} alt="thumbnail" />
                </div>
                <div className="dataBody">
                    <div className="dropdown-container" tabIndex="-1">
                        <div className="three-dots"></div>
                            <div className="dropdown">
                                <div onClick={() => actionFn(data.id, 'Edit')}>Edit</div>
                                <div onClick={() => actionFn(data.id, 'Delete')}>Delete</div>
                            </div>
                        </div>
                    </div>
                    <div className="title">{data.title}</div>
                    <div className="desc">{data.description}</div>
                    
                </div>
            ))
            }
        </>
    )
}