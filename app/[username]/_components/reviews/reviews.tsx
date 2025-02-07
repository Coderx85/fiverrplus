import React from 'react';
import { ReviewBox } from './review-box';
import { ReviewFullType } from '@/types';
import { Separator } from '@/components/ui/separator';

interface ReviewsProps {
    reviews: ReviewFullType[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
    return (
        <div className='space-y-8'>
            {reviews.map((review) => {
                return (
                    <>
                        <ReviewBox
                            key={review._id}
                            review={review}
                        />
                        <Separator />
                    </>
                );
            })}
        </div>
    );
};
