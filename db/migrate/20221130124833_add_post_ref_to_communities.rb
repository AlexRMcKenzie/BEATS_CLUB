class AddPostRefToCommunities < ActiveRecord::Migration[7.0]
  def change
    add_reference :communities, :post, foreign_key: true
  end
end
