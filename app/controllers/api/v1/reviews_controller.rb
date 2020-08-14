module Api
    module V1
        class ReviewsController < ApplicationController
          #before_action :authenticate_user! #need to be a user
            
            def create
                review = restaurant.reviews.new(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { errors: review.errors.messages }, status: 422
                end
            end

            def destroy
                #if curren_user.id == review.user.id  #current user must match author id before destroy method.
                    review = Review.find(params[:id])

                    if review.destroy
                        head :no_content
                    else
                        render json: { errors: review.errors.messages }, status: 422
                    end
                #end
            end



            private

            def restaurant
                @restaurant ||= Restaurant.find(params[:restaurant_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :restaurant_id)
            end
        end
    end
end
