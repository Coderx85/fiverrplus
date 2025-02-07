"use client";

import {useMutation } from "convex/react";
import { GigList } from "./_components/gig-list";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";

interface DashboardProps {
    searchParams: {
        search: string,
        favorites: string,
        filter: string
    };
};

const Dashboard = ({searchParams }: DashboardProps) => {
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