class DashboardController < ApplicationController
  def index
  	require 'open-uri'
  	jenkins = JSON.load(open("https://172.28.23.190/jenkins/api/json", {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}))
  	@jenkins_fails = 0

  	jenkins["jobs"].each do |job|
  		if job["color"] == "red"
  			@jenkins_fails += 1
  		end
  	end
  end
end
