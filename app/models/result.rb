class Result
  attr_accessor :status, :message, :id, :object

  def self.success(id, object)
    new true, 'operation success', id, object
  end

  def self.fail(id, message, object=nil)
    new false, message, id, object
  end

  def initialize(status, message, id, object)
    @status = status
    @message = message
    @id = id
    @object = object
  end
end
