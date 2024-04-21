import ActivityFeed from "@/components/ui/feed/activity-feed";

export default function feedPage(){
    return (
        <div className="grid grid-cols-[1fr_5fr_2fr]">
        <div>Sidebar</div>
        <div>
            <ActivityFeed/>
        </div>
        <div>idk</div>
        </div>
    )
}