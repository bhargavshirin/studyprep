import { NextRequest } from "next/server";
import { Authorizer } from "../../../../../util";

export async function POST(req:NextRequest){
    await Authorizer(req);
    const rawData = await new Response(req.body).text();
    const parsedData = JSON.parse(rawData);
    

}