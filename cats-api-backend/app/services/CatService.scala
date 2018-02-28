package services

import javax.inject.Inject
import models.Image
import play.api.libs.ws.WSClient

import scala.concurrent.{ExecutionContext, Future}

class CatService @Inject() (ws: WSClient)(implicit ec: ExecutionContext) {

  def listCats(category: Option[String]): Future[Seq[Image]] = {
    def qtyQuery(q: Int) = s"results_per_page=$q"
    def categoryAndQtyQuery(c: String, q: Int) = s"category=$c&${qtyQuery(q)}"

    val categoryAndQty = category match {
      case Some(c) if c == "hats"  => categoryAndQtyQuery(c, 20)
      case Some(c) if c == "space" => categoryAndQtyQuery(c, 50)
      case _                       => qtyQuery(100)
    }

    this.ws.url("http://thecatapi.com/api/images/get?format=xml&" + categoryAndQty)
      .get()
      .map(_.xml \ "data" \ "images" \\ "image" map (n => n: Image))
  }

}
