class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :catchphrase, :funds, :job_name
  def job_name
    
    self.object.job.name
  end 
end
