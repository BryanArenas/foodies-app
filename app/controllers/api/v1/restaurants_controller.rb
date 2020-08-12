module Api
    module V1
        class RestaurantsController < ApplicationController
           

            def index
                restaurants = Restaurant.all

                render json: serializer(restaurants, options)
            end

            def show
                restaurant = Restaurant.find_by(slug: params[:slug])

                render json: serializer(restaurant, options)
            end

            def create
                restaurant = Restaurant.new(restaurant_params)

                if restaurant.save
                    render json: serializer(restaurant)
                else
                    render json: { error: restaurant.errors.messages }, status: 422
                end
            end

            def update
                restaurant = Restaurant.find_by(slug: params[:slug])

                if restaurant.save
                    render json: serializer(restaurant, options)
                else
                    render json: { error: restaurant.errors.messages }, status: 422
                end
            end

            def destroy
                restaurant = Restaurant.find_by(slug: params[:slug])

                if restaurant.destroy
                    head :no_content
                else
                    render json: {errors: restaurant.errors.messages }, status: 422
                end
            end


            private

            def restaurant_params
                params.require(:restaurant).permit(:name, :image_url)
            end

            def serializer(records, options = {})
                RestaurantSerializer
                  .new(records, options)
                  .serialized_json
              end

            def options
                @options ||= { include: %i[reviews] }
            end


        end
    end
end