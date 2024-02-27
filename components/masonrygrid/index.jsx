import CardPhoto from "../cardphotos"

export default function MasonryGrid(){
    return (
        <div className="w-full bg-i01 grid grid-cols-3">
            <CardPhoto size='small'/>
            <CardPhoto size='medium'/>
            <CardPhoto size='large'/>
        </div>
    )

    
}