class CreateWatchLaters < ActiveRecord::Migration[7.0]
  def change
    create_table :watch_laters do |t|
      t.references :user
      t.references :movie
      t.timestamps
    end
  end
end
