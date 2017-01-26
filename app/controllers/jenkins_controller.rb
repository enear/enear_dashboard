class JenkinsController < ApplicationController
  def index
  	require 'open-uri'
  	@jenkins = JSON.load(open("https://172.28.23.190/jenkins/api/json", {ssl_verify_mode: OpenSSL::SSL::VERIFY_NONE}))
  end
end
