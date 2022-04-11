class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname, :null => false
      t.string :lastname, :null => false
      t.string :username, :null => false
      t.string :email, :null => false
      t.string :password_digest, :null => false
      t.boolean :admin, :default => false
      t.timestamps
    end
  end
end
