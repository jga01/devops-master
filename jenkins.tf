# Define the Docker provider
provider "docker" {
  # Use the local Docker daemon
  host = "tcp://localhost:2375"
}

resource "docker_volume" "jenkins_home" {
  name = "jenkins_home"
}

# Define the Jenkins container
resource "docker_container" "jenkins" {
  name  = "jenkins"
  image = "jenkins/jenkins"

  # Expose the Jenkins web interface on port 8080
  ports {
    internal = 8080
    external = 8080
  }

  # Mount a local directory to store Jenkins data
  volumes {
    volume_name = docker_volume.jenkins_home.name
    # host_path      = "/home/user/jenkins"
    container_path = "/var/jenkins_home"
    read_only = false
  }

  # Set environment variables to configure Jenkins
  env = [
    "JAVA_OPTS=-Djenkins.install.runSetupWizard=false",
    "JENKINS_OPTS=--prefix=/jenkins",
  ]

  # Restart the container automatically if it exits
  restart = "unless-stopped"
}