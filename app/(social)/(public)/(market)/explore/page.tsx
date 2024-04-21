import ExploreCard from "@/components/ui/marketplace/explore-card";

export default function explorePage(){
    return(

        <div className="grid grid-cols-[3fr_7fr]">
            <div className="filter">
                filter options
            </div>

            <div className="recomm">
                Recommendations
                <ExploreCard/>
            </div>
        </div>
    )

}