package models

import play.api.libs.json.{Json, OFormat}

import scala.xml.Node

case class Image(id: String, url: String, sourceUrl: String)

object Image {

  implicit val jsonFormat: OFormat[Image] = Json.format[Image]

  implicit val xmlReader: Node => Image = xml => {
    Image(xml \ "id" text, xml \ "url" text, xml \ "source_url" text)
  }

}
