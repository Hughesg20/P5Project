# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(firstname:"griffin",lastname:"hughes",username:"hughesg20",email:"griffinhughes2002@gmail.com",password:"password")


Favorite.create(user_id:User.all.first.id,weather_api_id:1)



3.times{
UserFav.create(user_id:User.all.first.id,zipcode:Faker::Address.zip)
}
