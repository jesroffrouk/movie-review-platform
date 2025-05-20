import Card from "./Card";

export default async function Profilepage(
    {params}: {params: Promise<{slug: string}>}
){

    const param = await params
    const username = param?.slug || ''

    
return(
    <>
    <Card username={username} />
    </>
);
}