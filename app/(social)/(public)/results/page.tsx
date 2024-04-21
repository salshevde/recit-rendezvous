"use client"
import SearchCard from "@/components/ui/Search/SearchCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchResultPage(
    {
        searchParams,
      }: {
        searchParams?: {
          query?: string;
          page?: string;
        };
      }
){

  const [resultList , setResultList] = useState([])
  async function getResults(){
    axios.get(`/api/search${searchParams?.query}`)
            .then(({data}) => {
                const res = data.trialFetch
                setResultList(res)
                return res
            })
            .catch((error) => {
                console.error(error);
            });
  }

  useEffect(
    ()=>{
        getResults()
    },
    []
)
  // Post content, people, 
    return(
      <div className="grid grid-cols-[1fr_5fr_2fr]">
      <div>Sidebar</div>
      <div>
         {/* {
          resultList.map((item,index)=>{
            let params = {
              contentId: "",
              contentUrl: "",
              contentThumbnail: "",
              contentType: "",
              contentNote: ""
          }

          if(item.type == "user")
            params = {}
            return(
              <SearchCard
              contentId=
              contentUrl=
              contentThumbnail=
              contentType=
              contentNote=
              />
            )
          })
         } */}
      </div>
      <div>idk</div>
      </div>
    )
}