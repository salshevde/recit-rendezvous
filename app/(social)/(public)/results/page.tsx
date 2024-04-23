"use client";
import SearchCard from "@/components/ui/Search/SearchCard";
import { RowDataType, searchResultType } from "@/lib/definitions";
import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "http://localhost:3000";

export default function SearchResultPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const [resultList, setResultList] = useState([]);

  console.log("logging resultsLIst");
  console.log(resultList);
  useEffect(() => {
    async function getResults() {
      const res = await axios.get(`/api/search?query=${searchParams?.query}`);

      setResultList( res.data.results);
    }
    getResults();
  }, [searchParams]);
  // Post content, people,
  return (
    <div className="grid grid-cols-[1fr_5fr_2fr]">
      <div>Sidebar</div>
      <div>
        {
          resultList.map((item: searchResultType,index)=>{
            const type:string = item.type;
            const data:RowDataType = item.data;

          if(item.type == "user")
            
            return(
              <SearchCard
              key={index}
              contentId= {data.UserID}
              contentUrl={`/profile?userId=${data.UserID}`}
              contentThumbnail="profile-pic"
              contentType={type}
              contentNote="title"
              />
            )
          })
         }
      </div>
      <div>idk</div>
    </div>
  );
}
