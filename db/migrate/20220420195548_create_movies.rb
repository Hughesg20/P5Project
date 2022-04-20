class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.integer :mid
      t.string :name
      t.string :image
      t.float :rating
      t.timestamps
    end
  end
end
