require 'rest-client'

class ProductsController < ApplicationController
    def index
        #https://{apikey}:{password}@{hostname}/admin/api/{version}/{resource}.json
        products_response = RestClient.get("https://#{ENV['SHOPIFY_API_KEY']}:#{ENV['SHOPIFY_ADMIN_PASSWORD']}@stellas-treats.myshopify.com/admin/api/2020-01/products.json")
        products = JSON.parse(products_response)

        render json: products
    end

end