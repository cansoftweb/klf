import CategorySub from "@/components/modules/category/CategorySub";
import CategpryList from "@/components/modules/category/CategpryList";
import PageHeader from "@/components/ui/page/PageHeader";
import SortHeader from "@/components/ui/page/SortHeader";
import { useState } from "react";

const CategoryScreen = () => {

    const [sort, setSort] = useState('a')

    return (
        <>
            <CategorySub />
            <div className="inner">
              
                <PageHeader
                    title="가맹사업법"
                />
                <SortHeader 
                    title="가맹사업법"
                    result={sort =>  setSort(sort)}
                />
                <CategpryList 
                    sort={sort}
                />
            </div>
        </>
    );
}

export default CategoryScreen;