name := "cats-api-backend"
organization := "com.davitux"
version := "1.0-SNAPSHOT"

scalaVersion := "2.12.4"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

libraryDependencies += ws
libraryDependencies += guice

scalacOptions ++= Seq(
  "-language:postfixOps"
)
