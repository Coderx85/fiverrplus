"use client";

import { useQuery } from "convex/react"
import { Header } from "./_components/header"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { Offers } from "./_components/offers";

interface PageProps {
    params: {
        username: string
        gigId: string
    }
}

const GigPage = ({
    params
}: PageProps) => {
    
    return (
        <div>
            <div className="flex flex-col sm:flex-row w-full sm:justify-center space-x-0 sm:space-x-3 lg:space-x-16">
                <div className="w-full space-y-8">
                    <Header
                        {}
                        editUrl={}
                        ownerId={}
                    />
                    
                </div>
                <Offers
                    offers={}
                    sellerId={}
                    editUrl={}
                />
            </div>
        </div>
    )
}

export default GigPage