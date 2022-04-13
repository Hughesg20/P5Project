class CreateWeatherApis < ActiveRecord::Migration[7.0]
  def change
    create_table :weather_apis do |t|

      t.timestamps
    end
  end
end
