import { Doc, Id } from "@/convex/_generated/dataModel"

export type ImageWithUrlType = Doc<"gigMedia"> & {
    url: string;
}

export type FullGigType = Doc<"gigs"> & {
    storageId?: Id<"_storage"> | undefined;
    favorited: boolean;
    offer: Doc<"offers">;
    reviews: Doc<"reviews">[];
    seller: Doc<"users">;
}