class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :author
      t.float :length

      t.timestamps
    end
  end
end
