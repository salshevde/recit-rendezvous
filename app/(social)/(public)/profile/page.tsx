import CreatePostButton from "@/components/ui/profile/buttons"
import ProfileCard from "@/components/ui/profile/profile-card"
import ProfileUnder from "@/components/ui/profile/profile-posts"

export default function InProfile({
    params,
}:{
    params:{id:string}
}){

    return (
        <div className="grid h-[100%]  bg-gray-100 grid-flow-col grid-cols-[1fr_4fr] ">
            <div></div>
            <div className="main flex flex-col items-center">
                <ProfileCard/>
                <ProfileUnder/>
                
            </div>
            
        </div>
        

        
    )
}