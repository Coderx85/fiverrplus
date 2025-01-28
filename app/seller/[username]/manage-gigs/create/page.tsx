"use client";;
import { use } from "react";

import { CreateForm } from "./_components/create-form";

interface CreateGigProps {
    params: Promise<{
        username: string;
    }>
}

const CreateGig = (props: CreateGigProps) => {
    const params = use(props.params);
    return (
        <div className="flex justify-center">
            <CreateForm
                username={params.username}
            />
        </div>
    );
}
export default CreateGig;