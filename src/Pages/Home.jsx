import {getAllCategories} from "../api";
import {useState, useEffect, Component} from "react";
import {Preloader} from "../Components/Preloader";
import {CategoryList} from "../Components/CategoryList";
import {Search} from "../Components/Search";
import {useLocation, useHistory} from "react-router-dom";


export const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);


    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item
            .strCategory
            .toLowerCase()
            .includes(str.toLowerCase()))
        );


        push({
                pathname,
                search: `?search${str}`
            }
        )
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(search ?
                data.categories.filter(item =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())
                ) : data.categories
            )
        });
    }, [])

    return (
        <>
            <Search cb={handleSearch}/>
            {
                !catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog}/>
            }
        </>
    )
}




