class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :do_jenkins

  def do_jenkins
  	require 'open-uri'
  	@jenkins = JSON.load(open("https://172.28.23.190/jenkins/api/json", {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}))
  	@jenkins_fails = 0

  	@jenkins["jobs"].each do |job|
  		if job["color"] == "red"
  			@jenkins_fails += 1
  		end
  	end
  end
end
