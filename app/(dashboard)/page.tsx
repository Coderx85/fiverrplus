"use client";

import { useConvexAuth, useMutation } from "convex/react";
import { GigList } from "./_components/gig-list";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState, use } from "react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

interface DashboardProps {
    searchParams: Promise<{
        search?: string;
        favorites?: string;
        filter?: string;
    }>;
};

const Dashboard = (props: DashboardProps) => {
    const searchParams = use(props.searchParams);
    const store = useMutation(api.users.store);
    useEffect(() => {
        const storeUser = async () => {
            await store({});
        }
        storeUser();
    }, [store])
    return (
        <GigList
            query={searchParams}
        />
    );
};

export default Dashboard;