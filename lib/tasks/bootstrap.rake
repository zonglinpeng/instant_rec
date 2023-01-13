namespace :bootstrap do
  desc "Add the default recommendation letter"
  task :default_rec_letter => :environment do
    RecLetter.create(
      :due_date => '2100-01-01 00:00:00',
      :school => 'UIUC',
      :owner => 'zonglin',
      :assignee => 'james',
    )
  end

  desc "Run all bootstrapping tasks"
  task :all => [:default_rec_letter]
end
