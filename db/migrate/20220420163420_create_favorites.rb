class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.references :user
      t.references :movie
      t.timestamps
    end
  end
end
