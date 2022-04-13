class CreateUserFavs < ActiveRecord::Migration[7.0]
  def change
    create_table :user_favs do |t|
      t.references :user, foreign_key: true
      t.string :zipcode
      t.timestamps
    end
  end
end
